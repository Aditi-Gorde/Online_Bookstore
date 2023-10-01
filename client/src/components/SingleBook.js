//Card to display a single book

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../assets/SingleBook.style.css';

function SingleBook({book}) {
  const history = useNavigate();
  const _id = book._id;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/login"))
      .then(() => history("/")) 
  };

  const handleCart = async () => {
    await axios.post(`http://localhost:5000/Cart`, {
      bookID:Number(book.bookID),
      title:String(book.title),
      authors:String(book.authors),
      average_rating:Number(book.average_rating),
      isbn:String(book.isbn),
      isbn13:Number(book.isbn13),
      language_code:String(book.language_code),
      num_pages:Number(book.num_pages),
      ratings_count:Number(book.ratings_count),
      text_reviews_count:Number(book.text_reviews_count),
      publication_date:Date(book.publication_date),
      publisher:String(book.publisher),
    })
    .then((res) => res.data);
  };


  console.log(_id);
  const [selectedOption, setSelectedOption] = useState('Edit');

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a4/0e/8f/a40e8f3a56c14f0ddb988757cdf4372b.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:16,height:'5rem'}}><strong>{book.title}</strong></Card.Title>
        <Card.Text style={{height:'4rem'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Authors : {book.authors}</ListGroup.Item>
        <ListGroup.Item>Rating : {book.average_rating }</ListGroup.Item>
        <ListGroup.Item>Price : {book.num_pages}</ListGroup.Item>
      </ListGroup>
      <Card.Body style={{paddingTop:'1.5rem'}}>
      <Dropdown onSelect={handleDropdownSelect} >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedOption}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Update">
            <Link to={`/BookDetail/${_id}`} className="nav_signup">
                Update
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={deleteHandler} eventKey="Delete">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      {/* <Card.Link href="#"><button class="btn" type="submit">Edit</button></Card.Link> */}
        <Card.Link href='' style={{marginLeft:'4rem'}}><button onClick={handleCart} class="btn ac" type="submit" >Add to cart</button></Card.Link>
      </Card.Body>
    </Card>
  );
}

//addToCart(books)

export default SingleBook;

{/* <Nav.Item>
<Nav.Link href="#disabled" disabled>
  Disabled
</Nav.Link>
</Nav.Item>
{`/Cart/${_id}`} */}