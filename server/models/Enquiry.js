var mongoose = require('mongoose');

var EnquirySchema = new mongoose.Schema({
    queryDate: { type: Date, default: Date.now },
    propertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    enquiryType: Number,
    message: String
});

mongoose.model('Enquiry', EnquirySchema);

module.exports = mongoose.model('Enquiry');