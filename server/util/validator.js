
const raw = require('body-parser/lib/types/raw');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
const User = require("../models/User");
const Property = require("../models/Property");

const { USER_TYPES } = require('./constants');
const { getLatLng } = require('./geocode');




const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;



const validInput = (email, password) => {
    return [emailRegex.test(email), passwordRegex.test(password)];
}

const emailAndPasswordValid = (req, res, next) => {

    const [validEmail, validPassword] = validInput(req.body.email, req.body.password);

    if (validEmail && validPassword) {
        next();
        return;
    } else if (!validEmail) {
        //email not valid
        res.status(400).send("Email is not valid");

    } else {
        //passsword not valid
        res.status(400).send("Password is not valid");

    }

}

const findUser = async (email) => {

    const user = await User.findOne({ email });
    return user;

}



function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    
    // if everything is good, save to request for use in other routes
    
    User.findById(decoded.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");

      req.user = user;
      req.userId = decoded.id;
      next();  
    });
  });
}





function onlyAdmin(req,res, next) {

  
  if(!req.user) res.end(404).send("No User found");
  else if(req.user.userType !== USER_TYPES.ADMIN) res.status(401).send("Not Authenticated for Admin")
  else next();
}



async function verifyPropertyDetails(req,res,next) {


  let property = req.body;

  if(!property) {
    res.status(403).end();
  }
  //Verify Address
  //Veridy Title
  if(!property.title || property.title.length === 0) {
    res.status(403).send({ message: "Title is wrong"})
    return;
  }

  property.price = parseFloat(property.price);
  if(!property.price || property.price <= 0 ) {
    res.status(403).send({ message: "Price is invalid"})
    return;

  }


  property.size = parseInt(property.size);
  if(!property.size || property.size <= 0 ) {
    res.status(403).send({ message: "Size is invalid"})
    return;
  }

  property.bedroom = parseInt(property.bedroom);
  if(!property.bedroom || property.bedroom <= 0 ) {
    res.status(403).send({ message: "Bedroom is invalid"})
    return;
  }

  property.bathroom = parseInt(property.bathroom);
  if(!property.bathroom || property.bathroom <= 0 ) {
    res.status(403).send({ message: "Bathroom is invalid"})
    return;
  }
 

  if(!property.description || property.description.length == 0) {
    res.status(403).send({ message: "Description is invalid"})
    return;

  }

  if(!property.images || property.images.length == 0) {
    res.status(403).send({ message: "Images are not present"})
    return;
  }

  

  let address = property.address;
  if(!address) {
    res.status(403).send({ message: "Address is invalid"})
    return;
  }

  let json = await getLatLng(address);
  console.log(json);
  if(json.length == 0) {
    res.status(403).send({ message: "Address is invalid"})
    return;
  }
  property.lat = json.results[0].geometry.location.lat;
  property.lng = json.results[0].geometry.location.lng;
  property.address = json.results[0].formatted_address;

  if(!property.images) {
    res.status(403).send({ message: "Images is invalid"})
    return;
  }

  
  console.log(property.images);
  property.images = property.images.split(",");
  if(!property.images || property.images.length === 0) {
    res.status(403).send({ message: "Images is invalid"})
    return;
  }
  console.log(property.images);
  


  req.property = property;
  next();

}



module.exports = {
    emailRegex,
    passwordRegex,
    emailAndPasswordValid,
    validInput,
    verifyToken,
    onlyAdmin: [verifyToken, onlyAdmin],
    verifyPropertyDetails
}