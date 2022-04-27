var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


const {verifyToken, onlyAdmin} = require('../../util/validator');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../../models/User');


// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', onlyAdmin,function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send({ success: false, message: "There was a problem finding the user."});
        res.status(200).send({success:true, data: users});
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id',  verifyToken ,function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send({ success: false, message: "There was a problem updating the user."});
        if (!user) return res.status(404).send({ success: false, message: "No User found"});
        res.status(200).send({success:true, data: user});
    });
});

// DELETES A USER FROM THE DATABASE
// router.delete('/:id', verifyToken,function (req, res) {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem deleting the user.");
//         res.status(200).send("User: "+ user.name +" was deleted.");
//     });
// });

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', onlyAdmin, function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send({ success: false, message: "There was a problem updating the user."});
        res.status(200).send({success: true, data:user});
    });
});


module.exports = router;