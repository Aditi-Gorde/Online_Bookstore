//To display Book details of 1 book

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../assets/SingleBook.style.css';
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BookData() {
  const {id} = useParams();
  console.log(id);
  const [book, setBook] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        console.log(book);
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  }, [id]);

  return (
    <div className='d-flex flex-row justify-content-evenly flex-lg-wrap flex-lg-nowrap align-items-center my-2 '>
      <img src="https://images.unsplash.com/photo-1519060825752-c4832f2d400a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" style={{width:'35%',height:'100%'}} />
      <div style={{width:'40%'}}>
        <h2>{book.title}</h2>
        <h4>Authors : {book.authors}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem pariatur quibusdam quisquam voluptates numquam temporibus facilis, repudiandae suscipit ab ea adipisci provident perferendis. Officiis tempora amet et ex libero porro!</p>
<p><FontAwesomeIcon icon="fa-solid fa-star" beat style={{color: "#d4af37",}} />  {book.average_rating}({book.ratings_count})</p>
        <p>ISBN : {book.isbn}</p>
        <p>ISBN13 : {book.isbn13}</p>
        <p>Language Code : {book.language_code}</p>
        <p>Number of Pages <FontAwesomeIcon icon="fa-solid fa-book-open" style={{color: "#000000",}} /> : {book.num_pages}</p>
        <p>Text Review Counts : {book.text_reviews_count}</p>
        <p>Publication Date : {book.publication_date}</p>
        <p>Publisher : {book.publisher}</p>

      </div>
    </div>
  );
}


export default BookData;
