//To update book values 

import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const BookDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`process.env.backend_url/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`process.env.backend_url/books/${id}`, {
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
      sendRequest().then(() => history("/"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
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
             />
             <FormLabel>Price</FormLabel>
             <TextField
               value={inputs.price}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="price"
             />
             
             <Button variant="contained" type="submit">
               Update Book
             </Button>
           </Box>
         </form>
        )}
      </div>
    );
  };
  
  export {BookDetail};
  