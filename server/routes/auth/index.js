var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('../../models/User');

const {emailAndPasswordValid, verifyToken} = require('../../util/validator');

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../../config'); // get config file
const { USER_TYPES } = require('../../util/constants');

router.post('/login', emailAndPasswordValid ,function(req, res) {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send({ success: false, message: 'Error on the server.'});
    if (!user) return res.status(404).send({ success: false, message: 'No user found.'});
    
    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ success: false, token: null });

    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 * 30  // expires in 24 hours
    });

    // return the information including token as JSON
    res.status(200).send({ success: true, token: token });
  });
  
});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.post('/register', emailAndPasswordValid ,function(req, res) {


  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword,
    userType: USER_TYPES.USER
  }, 
  function (err, user) {
    if (err) return res.status(500).send({ success: false, message:"There was a problem registering the user"});

    // if user is registered without errors
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ success: true, token: token });
  });

});

router.get('/me', verifyToken, function(req, res, next) {

  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send({ success: false, message:"There was a problem finding the user"});
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send({
      success: true,
      data: user
    });
  });

});

module.exports = router;