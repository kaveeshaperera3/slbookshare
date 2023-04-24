const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatDetails = new Schema({
    cName: {
        type: String,
        required: true,
    },
    cDate: {
        type: String,
        required: true,
    }   


});
const chatDetailsModel = mongoose.model(
    "chatDetails",
    ChatDetails
);
module.exports = chatDetailsModel ;