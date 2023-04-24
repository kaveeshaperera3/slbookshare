const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooktransationDetails = new Schema({
    transID: {
        type: String,
        required: true,
    },
    transType: {
        type: String,
        required: true,
    },
    transDate: {
        type: String,
        required: true,
    }
    
});
const booktransationDetailsModel = mongoose.model(
    "booktransationDetails",
    BooktransationDetails
);
module.exports = booktransationDetailsModel ;