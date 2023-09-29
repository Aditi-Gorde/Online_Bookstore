import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/SingleBook.style.css';

function SingleBook() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addToCart = (book) => {
    setCart([...cart, book]);
    setTotalPrice(totalPrice + book.price);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a4/0e/8f/a40e8f3a56c14f0ddb988757cdf4372b.jpg" />
      <Card.Body>
        <Card.Title>Book Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Authors : </ListGroup.Item>
        <ListGroup.Item>Rating</ListGroup.Item>
        <ListGroup.Item>Price : </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{paddingTop:'1.5rem'}}>
      <Card.Link href="#"><button class="btn" type="submit">Details</button></Card.Link>
        <Card.Link href="#" style={{marginLeft:'4rem'}}><button class="btn ac" type="submit"  onClick={() => addToCart(books)}>Add to cart</button></Card.Link>
      </Card.Body>
    </Card>
  );
}

//addToCart(books)

export default SingleBook;