//To create a new book and add to the databasee

import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios"; 
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import '../assets/AddBook.style.css';

  const AddBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
    bookID: "",
    title: "",
    authors: "",
    average_rating: "",
    isbn: "",
    isbn13: "",
    language_code: "",
    num_pages: "",
    ratings_count: "",
    text_reviews_count: "",
    publication_date: "",
    publisher: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/books", {

          bookID:Number(inputs.bookID),
          title:String(inputs.title),
          authors:String(inputs.authors),
          average_rating:Number(inputs.average_rating),
          isbn:String(inputs.isbn),
          isbn13:Number(inputs.isbn13),
          language_code:String(inputs.language_code),
          num_pages:Number(inputs.num_pages),
          ratings_count:Number(inputs.ratings_count),
          text_reviews_count:Number(inputs.text_reviews_count),
          publication_date:Date(inputs.publication_date),
          publisher:String(inputs.publisher),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/"));
    };
  
    return (
      <div className="AddBook-main">
        <h3 className="heading">Add Book</h3>
      <form onSubmit={handleSubmit} >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Book ID</FormLabel>
             <TextField
               value={inputs.bookID}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="bookID"
             />
             <FormLabel>Title</FormLabel>
             <TextField
               value={inputs.title}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="title"
             />
             <FormLabel>Authors</FormLabel>
             <TextField
               value={inputs.authors}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="authors"
             />
             <FormLabel>Average Rating</FormLabel>
             <TextField
               value={inputs.average_rating}
               onChange={handleChange}
               type="number"
               margin="normal"
               fullWidth
               variant="outlined"
               name="average_rating"
             />
             <FormLabel>ISBN</FormLabel>
             <TextField
               value={inputs.isbn}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="isbn"
             />
             <FormLabel>ISBN13</FormLabel>
             <TextField
               value={inputs.isbn13}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="isbn13"
             />
             <FormLabel>Language Code</FormLabel>
             <TextField
               value={inputs.language_code}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="language_code"
             />
             <FormLabel>Number of Pages</FormLabel>
             <TextField
               value={inputs.num_pages}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="num_pages"
             />
             <FormLabel>Ratings Count</FormLabel>
             <TextField
               value={inputs.ratings_count}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="ratings_count"
             />
             <FormLabel>Text Reviews</FormLabel>
             <TextField
               value={inputs.text_reviews_count}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="text_reviews_count"
             />
             <FormLabel>Publication Date</FormLabel>
             <TextField
               value={inputs.publication_date}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="publication_date"
             />
             <FormLabel>Publisher</FormLabel>
             <TextField
               value={inputs.publisher}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="publisher"
          /> <br />
          

          <button class="btn ac" type="submit" >ADD BOOK</button>
        </Box>
      </form>
      </div>
    );
  };
  
  export { AddBook };
  