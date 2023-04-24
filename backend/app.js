const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

const url = process.env.MONGODB_URL;

try {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('strictQuery',false);
  console.log("MongoDB connected");
} catch (error) {
  console.log(error.message);

  //Exit Process with failure
  process.exit(1);
}

const bookDetails = require("./Routes/BookRoute");
app.use("/book", bookDetails);

const bookReviewDetails = require("./Routes/BookReviewDetailRoute");
app.use("/bookReviewDetail", bookReviewDetails);

const userDetails = require("./Routes/UserDetailsRoute");
app.use("/userDetails", userDetails);

const bookTrans = require("./Routes/BooktransationRoute");
app.use("/BookTrans", bookTrans);

const chatDetails = require("./Routes/ChatDetailsRoute");
app.use("/chatDetails", chatDetails);

//routs goes here

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to mongo DB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
