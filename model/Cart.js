const { Int32, Double, Long } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  // Define a MongoDB schema and model (for example, a "Book" model)

  const cartSchema = new Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    books:[{
        bookID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
        price: {
            type:Number
        }
    }],
    totalPrice: {
        type: Number
    },
    estDeliveryDate: {
        type: Date,
        default: () => new Date(+new Date() + 3*24*60*60*1000)
    }

  });

  module.exports = mongoose.model("Cart", cartSchema);


