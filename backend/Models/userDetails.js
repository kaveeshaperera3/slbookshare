const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserDetails = new Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    nameInitial: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    nic: {
        type: String,
        required: true,
    },
    profilePicUrl: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    } 
});
const userDetailsModel = mongoose.model(
    "userDetails",
    UserDetails
);
module.exports = userDetailsModel ;
