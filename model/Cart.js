const { Int32, Double, Long } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  // Define a MongoDB schema and model (for example, a "Book" model)

  const cartSchema = new Schema({

    bookID : {
        type: Number,
    },

    title : {
        type: String,
    },

    authors : {
        type: String,
    },

    average_rating : {
        type: Number,
    },

    isbn : {
        type: String,
    },

    isbn13 : {
        type: Number,
    },

    language_code : {
        type: String,
    },

    num_pages : {
        type: Number,
    },

    ratings_count : {
        type: Number,
    },

    text_reviews_count : {
        type: Number,
    },

    publication_date : {
        type: Date,
    },

    publisher : {
        type: String,
    },

  });

  module.exports = mongoose.model("Cart", cartSchema);


