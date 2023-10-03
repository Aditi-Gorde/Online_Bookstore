const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
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
    publisher,
    price, } = req.body;
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
    price
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
    publisher,
    price } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
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
    price
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


const searchBook = async (req, res,next) => {
  const page = parseInt(req.query.page) || 1; // Page number (default: 1)
  const perPage = parseInt(req.query.perPage) || 8; // Number of books per page (default: 10)
  const  query = req.query?.question;

  let books;
  try {
    const skip = (page - 1) * perPage;

    if(query) {
       books = await Book.find({
        $or: [{ title: new RegExp(query, 'i') }, { author: new RegExp(query, 'i') }],
      }) // Adjust the limit as per your pagination needs
      // res.json(books);
    }
    
    // Fetch paginated books from the database
    else{
       books = await Book.find()
      .skip(skip)
      .limit(perPage);
    }
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
  return res.status(200).json({ books });
};


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.searchBook = searchBook;