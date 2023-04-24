const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookDetails = new Schema({
    bookISBN: {
        type: String,
        required: true,
    },
    bCategory: {
        type: String,
        required: true,
    },
    bTitle: {
        type: String,
        required: true,
    },
    bAuthor: {
        type: String,
        required: true,
    },
    bEdition: {
        type: String,
        required: true,
    },
    bPublication: {
        type: String,
        required: true,
    },
    bCondition:{
        type: String,
        required: true,
    },
    bOriginalPrice:{
        type: String,
        required: true,
    },
    bSellingPrice:{
        type: String,
        required: true,
    },
    bDescription: {
        type: String,
        required: true,
    },
    bPublishYear: {
        type: String,
        required: true,
    },     
    ownerId:{
        type: String,
        required: true,
    }

});
const bookDetailsModel = mongoose.model(
    "bookDetails",
    BookDetails
);
module.exports = bookDetailsModel ;
