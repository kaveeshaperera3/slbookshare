const router = require("express").Router();
const Book = require("../Models/book");


// post method which need to have all the details to post the data to the dab
router.post("/", (req, res) => {
    console.log("hithere");
    const newBook = req.body;

    const bookDetails = new Book(
        newBook
      
    );

    bookDetails
        .save()
        .then((result) => {
            res.status(200).send({ result });
        })
        .catch((error) => {
            res.send(error);
        });
});


//get all the book related details api
router.get("/", async (req, res) => {
    try {
        const book = await Book.find();
        res.send(book);
    } catch (error) {
        res.send(`Error - ${error}`);
    }
});

module.exports = router;