const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookReviewDetails = new Schema({
    
    bookISBN: {
        type: String,
        required: true,
    },
    bRevDate: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    noOfStarsCondition: {
        type: String,
        required: true,
    },
    reviewCondition: {
        type: String,
        
    },
    noOfStarsContent: {
        type: String,
        
    },
    reviewContent: {
        type: String,        
    }
});
const reviewDetailsModel = mongoose.model(
    "bookReviewDetails",
    BookReviewDetails
);
module.exports = reviewDetailsModel ;