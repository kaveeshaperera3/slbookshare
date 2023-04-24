const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Catagory = new Schema({

    CatName: {
        type: String,
        required: true,
    },
    CatImageUrl: {
        type: String,
        required: true,
    },   
    
});
const CatagoryModel = mongoose.model(
    "Catagory",
    Catagory
);
module.exports = CatagoryModel ;
