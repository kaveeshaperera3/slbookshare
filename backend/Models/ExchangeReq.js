const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExchangeReq = new Schema({

    ExchangeReqName: {
        type: String,
        required: true,
    },
    BookID: {
        type: String,
        required: true,
    },
    UserID: {
        type: String,
        required: true,
    },
 
    
});
const ExchangeReq = mongoose.model(
    "ExchangeReq",
    ExchangeReq
);
module.exports = ExchangeReq ;
