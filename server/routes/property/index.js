var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const { verifyToken, onlyAdmin, verifyPropertyDetails } = require('../../util/validator');

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

var Property = require('../../models/Property');
const { getLatLng, getDistanceFromLatLonInKm } = require('../../util/geocode');


router.post("/new", onlyAdmin, verifyPropertyDetails, (req, res) => {

  let property = req.property;

  if (!property) {
    res.end(404).send({
      success: false,
      message: "Unexpected Error"
    });
    return;
  }
  console.log(typeof property.images);
  Property.create(property,
    function (err, user) {
      if (err) { console.log(err); return res.status(500).send({ success: false, message: "There was a problem finding the Property." }); }
      res.status(200).send({ success: true });
    });

});


router.post("/update", onlyAdmin, verifyPropertyDetails, (req, res) => {

  let property = req.property;

  if (!property) {
    res.end(404).send({
      success: false,
      message: "Unexpected Error"
    });
    return;
  }

  Property.findOneAndUpdate( property.id, property, {},
    function (err, user) {
      if (err) { console.log(err); return res.status(500).send({ success: false, message: "There was a problem finding the Property." }); }
      res.status(200).send({ success: true });
    });

});

router.get("/delete/:id", (req, res) => {

  Property.findOneAndDelete(req.params.id, function (err, prop) {
    if (err) return res.status(500).send({ success: false, message: "There was a problem finding the Property." });
    if (!user) return res.status(404).send({ success: false, message: "No Property Found" });
    res.status(200).send({
      success: true,
      data: prop
    });
  });

});


router.get("/get/:id", (req, res) => {

  Property.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send({ success: false, message: "There was a problem finding the Property." });
    if (!user) return res.status(404).send({ success: false, message: "No Property Found" });
    res.status(200).send({
      success: true,
      data: user
    });
  });

});


router.get("/buy", (req, res) => {
  Property.find({ isForSale: true }, function (err, properties) {
    if (err) return res.status(500).send(err + "");
    res.send({
      success: true,
      data: properties
    });

  });
});


router.get("/rent", (req, res) => {

  Property.find({ isForSale: false }, function (err, properties) {
    if (err) return res.status(500).send({ success: false, message: "There was a problem finding the Property." });
    res.send({
      success: true,
      data: properties
    });

  });

});


router.get("/search/:q", async (req, res) => {

  if (!req.params.q) {
    res.end(403);
    return;
  }

  let json = await getLatLng(req.params.q);
  if (json.length === 0) {
    res.status(200).send({ success: true, data: [] });
    return;
  }

  let location = json.results[0].geometry.location;

  Property.find({}, function (err, properties) {

    if (err) { console.log(err); return res.status(500).send({ success: false, message: "There was a problem finding the Property." }); }
    let filtered = [];
    for (let property of properties) {
      let distance = getDistanceFromLatLonInKm(property.lat, property.lng, location.lat, location.lng);
      if (distance <= 20) {
        filtered.push(property);
      }
    }

    res.send({
      success: true,
      data: filtered
    });
  });


});




module.exports = router;