const { Int32, Double, Long } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  // Define a MongoDB schema and model (for example, a "Book" model)

  const bookSchema = new Schema({

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
  });

  module.exports = mongoose.model("Book", bookSchema);

