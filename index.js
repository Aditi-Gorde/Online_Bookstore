// Import necessary dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");

const router = require("./routes/book-routes");
const userRoutes = require("./routes/userRoutes");

// Create an instance of the Express.js server
const app = express();
const port = process.env.PORT || 5000; // Define the port number

// Middleware setup
app.use(bodyParser.json()); // Parse JSON requests
app.use(express.json());

app.use(errorHandler);
app.use(cors());
app.use("/users", userRoutes);
app.use("/books", router);



// MongoDB Configuration
//const mongoURI = 'mongodb+srv://admin:MpYvmSaMjLFHu9fC@cluster0.kgf0n6b.mongodb.net/BookStoreApp';
const mongoURI = 'mongodb+srv://admin:5V78OZkYoJnj0CCI@cluster0.lw2an95.mongodb.net/myDB?retryWrites=true&w=majority'

//Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  // Start the Express.js server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

 //5V78OZkYoJnj0CCI