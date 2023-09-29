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
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/books"));
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
               name="name"
             />
             <FormLabel>Title</FormLabel>
             <TextField
               value={inputs.title}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="author"
             />
             <FormLabel>Authors</FormLabel>
             <TextField
               value={inputs.authors}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="description"
             />
             <FormLabel>Average Rating</FormLabel>
             <TextField
               value={inputs.average_rating}
               onChange={handleChange}
               type="number"
               margin="normal"
               fullWidth
               variant="outlined"
               name="price"
             />
             <FormLabel>ISBN</FormLabel>
             <TextField
               value={inputs.isbn}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="image"
             />
             <FormLabel>ISBN13</FormLabel>
             <TextField
               value={inputs.isbn13}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
             />
             <FormLabel>Language Code</FormLabel>
             <TextField
               value={inputs.language_code}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
             />
             <FormLabel>Number of Pages</FormLabel>
             <TextField
               value={inputs.num_pages}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
             />
             <FormLabel>Ratings Count</FormLabel>
             <TextField
               value={inputs.ratings_count}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
             />
             <FormLabel>Text Reviews</FormLabel>
             <TextField
               value={inputs.text_reviews_count}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
             />
             <FormLabel>Publication Date</FormLabel>
             <TextField
               value={inputs.publication_date}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
             />
             <FormLabel>Publisher</FormLabel>
             <TextField
               value={inputs.publisher}
               onChange={handleChange}
               margin="normal"
               fullWidth
               variant="outlined"
               name="name"
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
  