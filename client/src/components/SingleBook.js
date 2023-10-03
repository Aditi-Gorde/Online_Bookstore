//Card to display a single book

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../assets/SingleBook.style.css';
import { red } from '@mui/material/colors';
import CartContext from '../context/CartContext';
import { useAuthContext } from '../hooks/useAuthContext';

function SingleBook({ book }) {
  const { addToCart } = useContext(CartContext);
  const { user } = useAuthContext();

  const history = useNavigate();
  const _id = book._id;
  const deleteHandler = async () => {
    await axios
      .delete(`process.env.backend_url/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/login"))
      .then(() => history("/"))
  };

  const updateHandler = async (_id) => {
    history(`/BookDetail/${_id}`)
  }

  console.log(_id);
  const [selectedOption, setSelectedOption] = useState('Edit');

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
  };
  const [buttonName, setButtonName] = useState('Add to cart')

  return (
    <Card style={{ width:'15rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a4/0e/8f/a40e8f3a56c14f0ddb988757cdf4372b.jpg" />
      <Card.Body>
        <Card.Title style={{ fontSize: 16, height: '3rem' }}><strong>{book.title}</strong></Card.Title>
      
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ height: '4rem' }} >Authors : {book.authors}</ListGroup.Item>
        <ListGroup.Item>Rating : {book.average_rating}</ListGroup.Item>
        <ListGroup.Item>Price : {book.price}</ListGroup.Item>
        {/* <Link to={`/AllBooks/${book._id}`}>Details</Link> */}
        {user ? (
          <div className="list-group-flush mx-auto">
            <ListGroup.Item className='mx-auto mb-1'>
              <button onClick={(e) => {
                addToCart(book);
                e.target.disabled = true
                setButtonName("Added to cart")
              }} class="btn ac">{buttonName}</button>
            </ListGroup.Item>
            <ListGroup.Item className='mx-auto'>
              <Dropdown onSelect={handleDropdownSelect} className='mx-auto' >
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {selectedOption}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Update" onClick={() => updateHandler(_id)}>Update</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteHandler} eventKey="Delete">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>
          </div>

        ) : ''}

      </ListGroup>
    </Card>
  );
}

//addToCart(books)

export default SingleBook;