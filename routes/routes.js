const router = require("express").Router();
let Book = require("../model/booklist.js");

// get all books
router.get("/", async (req, res) => {
  try {
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get book by id
router.get("/:id", async (req, res) => {
  try {
    const newBook = await Book.findById(req.params.id);
    res.status(200).json(newBook);
  } catch (error) {
    res.status(500).json(error);
  }
});

//route for adding new book
router.post("/", async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const newBook = new Book({ title, author, description });
    await newBook.save();
    console.log(newBook);
    res.status(200).json("Book added!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author, description } = req.body;
  try {
    await Book.findByIdAndUpdate(
      id,
      {
        title: title,
        author: author,
        description: description,
      },
      { new: true }
    );
    res.status(200).json("Book updated!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
