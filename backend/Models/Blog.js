const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blog = new Schema({

    BlogTitle: {
        type: String,
        required: true,
    },
    Blog Link: {
        type: String,
        required: true,
    },
    BlogImageUrl: {
        type: String,
        required: true,
    },
 
    
});
const BlogModel = mongoose.model(
    "Blog",
    Blog
);
module.exports = BlogModel ;
