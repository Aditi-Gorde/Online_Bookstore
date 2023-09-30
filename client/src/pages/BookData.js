//To display Book details of 1 book

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../assets/SingleBook.style.css';

function BookData({book}) {
  const history = useNavigate();
  const _id = book._id;
  console.log(_id);

  return (
    <section id="about">
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-8">
            <div class="image-holder">
              <img src="images/single-image3.jpg" alt="single" class="single-image img-fluid" style={{height:'30rem', width:'38rem',}} />
            </div>
          </div>
          <div class="about-content bg-gray col-lg-4 m-auto top-0 end-0 bottom-0">
            <h3 class="py-3">book.title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus doloribus provident quidem molestias! Dolorum animi distinctio illo error possimus, ex consequatur, obcaecati nisi suscipit impedit aliquid fugit ipsa aut.
            </p>
            
            <a href="about.html" class="btn">About us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}


export default BookData;
