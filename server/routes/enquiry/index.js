var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const { verifyToken, onlyAdmin, verifyPropertyDetails } = require('../../util/validator');
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
var Enquiry = require('../../models/Enquiry');
var Property = require('../../models/Property');
var User = require('../../models/User');
const { sendEmail } = require('../../util/email');

const verifyEnquiry = (req, res, next) => {

    let propertyID = req.body.propertyID;
    let userID = req.user._id;
    let message = req.body.message;
    let type = parseInt(req.body.enquiryType)

    if(!message || message.length === 0) {
        res.status(400).send({ success: false, message: "Message is not valid"})
        return;
    }

    if(!type || type > 1 || type < 0) {
        res.status(400).send({ success: false, message: "Enquiry Type is not valid"})
        return;
    }

    User.findById(userID, (err, user) => {
        if(err) {
            console.log(err);
            res.status(400).send({ success: false, message: "Cannot find user"})
            return;
        } else {
            Property.findById(propertyID, (err, property) => {
                if(err) {
                    console.log(err);
                    res.status(400).send({ success: false, message: "Cannot find Propery"})
                    return;
                } else {
                    req.property = property;
                    req.enquiry = req.body;
                    req.enquiry.userID = req.user._id;
                    req.enquiry.userName = req.user.name;
                    next();
                }
            })
        
        }
    })



}

router.post("/new", verifyToken, verifyEnquiry, (req, res) => {

  let enquiry = req.enquiry;

  Enquiry.create(enquiry,
    function (err, user) {
      if (err) { console.log(err); return res.status(500).send({ success: false, message: "There was a problem registering the Enquiry." }); }
      res.status(200).send({ success: true });
      sendEmail({
          name: req.user.name,
          address: req.property.address,
          message: enquiry.message,
          email: req.user.email,
      });
    });

});

router.get("/user/:userID", verifyToken, (req, res) => {
    
    Enquiry.find({ userID: req.params.userID}, (err, en)  => {
        if(err) {
            console.log(err);
            res.status(500).send({success: false, message:"Cannot Load all Enquiries"})
        } else res.send(en);
    })
});


router.get("/all", onlyAdmin, (req, res) => {
    Enquiry.find({}, (err, en)  => {
        if(err) {
            console.log(err);
            res.status(500).send({success: false, message:"Cannot Load all Enquiries"})
        } else res.send({success: true, data:en});
    })
});



module.exports = router;