const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
});

const Book = mongoose.model("Book", bookSchema, "300365023-mona");
module.exports = Book;
