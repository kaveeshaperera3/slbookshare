const router = require("express").Router();
const BookReviewDetails = require("../Models/bookReviewDetail");


// post method which need to have all the details to post the data to the dab
router.post("/", (req, res) => {
    console.log("hithere");
    const newBookReviewDetails = req.body;

    const bookReviewDetails = new BookReviewDetails(
        newBookReviewDetails
      
    );

    bookReviewDetails
        .save()
        .then((result) => {
            res.status(200).send({ result });
        })
        .catch((error) => {
            res.send(error);
        });
});

//get all the bookReviewDetails related details api
router.get("/", async (req, res) => {
    try {
        const bookReviewDetails = await BookReviewDetails.find();
        res.send(bookReviewDetails);
    } catch (error) {
        res.send(`Error - ${error}`);
    }
});

module.exports = router;