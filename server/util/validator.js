
const raw = require('body-parser/lib/types/raw');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
const User = require("../models/User");
const { USER_TYPES } = require('./constants');



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
  if(req.user.userType !== USER_TYPES.ADMIN) res.end(401).send("Not Authenticated for Admin")
  next();
}





module.exports = {
    emailRegex,
    passwordRegex,
    emailAndPasswordValid,
    validInput,
    verifyToken,
    onlyAdmin: [verifyToken, onlyAdmin]
}