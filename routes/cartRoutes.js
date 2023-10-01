const express = require("express");
const router = express.Router();
const Book = require("../model/Cart");
const cartController = require("../controllers/cart-controller");

router.get("/", cartController.getAllBooks);
router.post("/", cartController.addBook);
router.delete("/:id", cartController.deleteBook);


module.exports = router;

//http://localhost:5000/Cart