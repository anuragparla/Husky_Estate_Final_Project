var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
    address: String,
    title: String,
    price: Number,
    isForSale: { type: Boolean, default: false},
    size: Number,
    confifuration: String,
    lat: Number,
    lng: Number,
    description: String,
    images: [String],
    listingDate: { type: Date, default: Date.now },
});

mongoose.model('Property', PropertySchema);

module.exports = mongoose.model('Property');