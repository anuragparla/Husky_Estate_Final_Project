var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const {verifyToken, onlyAdmin, verifyPropertyDetails } = require('../../util/validator');
router.use(bodyParser.urlencoded({ extended: true }));

var Property = require('../../models/Property');
const { getLatLng, getDistanceFromLatLonInKm } = require('../../util/geocode');


router.post("/new", onlyAdmin,verifyPropertyDetails, (req,res) => {

    let property = req.property;

    if(!property) {
        res.end(404);
        return;
    }

    Property.create(property, 
      function (err, user) {
        if (err) {return res.status(500).send("There was a problem registering the prooperty`.");}
        res.status(200).end();
      });

});


router.get("/get/:id",  (req,res) => {

  Property.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the Property.");
    if (!user) return res.status(404).send("No Property found.");
    res.status(200).send(user);
  });

});


router.get("/buy",  (req,res) => {
  Property.find({isForSale:true}, function(err, properties) {
    if (err) return res.status(500).send(err+"");
    res.send(properties);
  });  
});


router.get("/rent",  (req,res) => {

  Property.find({isForSale:false}, function(err, properties) {
    if (err) return res.status(500).send("There was a problem finding the Property.");
    res.send(properties);
  });
  
});


router.get("/search/:q",  async (req,res) => {

  if(!req.params.q) {
    res.end(403);
    return;
  }

  let json = await getLatLng(req.params.q);
  if(json.length === 0) {
    res.status(200).send([]);
    return;
  }

  let location = json.results[0].geometry.location;

  Property.find({}, function(err, properties) {

    if (err) {console.log(err);return res.status(500).send("There was a problem finding the Property.");}
    let filtered = [];
    for ( let property of properties) {
      let distance = getDistanceFromLatLonInKm(property.lat, property.lng, location.lat, location.lng);
      if(distance <= 3) {
        filtered.add(property);
      }
    }

    res.send(filtered);
  });

  
});




module.exports = router;