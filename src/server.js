const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const URI =
  "mongodb+srv://dasigm:pass123@cluster0.hedoape.mongodb.net/BookList?retryWrites=true&w=majority";
mongoose.connect(URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// import routes
const bookRouter = require("../routes/routes.js");

// adding /books to before all routes
app.use("/book", bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
