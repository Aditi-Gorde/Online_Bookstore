const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
    console.log(Book);
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { bookID,
    title,
    authors,
    average_rating,
    isbn,
    isbn13,
    language_code,
    num_pages,
    ratings_count,
    text_reviews_count,
    publication_date,
    publisher, } = req.body;
  let book;
  try {
    book = new Book({
    bookID,
    title,
    authors,
    average_rating,
    isbn,
    isbn13,
    language_code,
    num_pages,
    ratings_count,
    text_reviews_count,
    publication_date,
    publisher,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  console.log(book);
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;