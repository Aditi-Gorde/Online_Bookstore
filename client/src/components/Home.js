//Home Page

import * as React from 'react/jsx-runtime';
import ReactDOM from 'react-dom';
import '../assets/Home.style.css'
import SingleBook from './SingleBook'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.books);
        console.log(books);
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  }, []);
console.log(books);
  if (!Array.isArray(books)) {
    return <div>No books available</div>;
  }
  const limitedBooks = books.slice(5, 9);
  return (
        <>
            <div className="container div1">
              <div className="image">
                  <img className='mainImg' src={process.env.PUBLIC_URL + '/images/post-item4.jpg'}alt="Image" />
              </div>
              <div className="text">
              <h2 className='homeH2'>Welcome to </h2>
              <p>Discover, read, and connect with your favorite books and authors. Explore a diverse collection, join discussions, and enjoy reading anywhere, anytime. Start your reading journey today and dive into a world of stories.Join our passionate community of readers and writers, and start your literary adventure today.</p>
              </div>
            </div>

      <section id="company-services" class="padding-xlarge" style={{marginTop:'6rem'}}>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <span class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <FontAwesomeIcon icon="fa-solid fa-truck" size='xl' style={{color: "#000000",}} />
              </span>
              <div class="icon-box-content">
                <h4 class="card-title">Free delivery</h4>
                <p>Consectetur adipi elit lorem ipsumcon sectetur dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <div class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <FontAwesomeIcon icon="fa-solid fa-book" size='xl' style={{color: "#000000",}} />
              </div>
              <div class="icon-box-content">
                <h4 class="card-title">Quality guarantee</h4>
                <p>Dolor sit amet elit lorem orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <div class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <FontAwesomeIcon icon="fa-solid fa-award" size='xl' style={{color: "#000000",}} />
              </div>
              <div class="icon-box-content">
                <h4 class="card-title">Daily offers</h4>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <div class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar" size='xl' style={{color: "#000000",}} />
              </div>
              <div class="icon-box-content">
                <h4 class="card-title">100% secure payment</h4>
                <p>Rem adipi elit lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


<section id="about" style={{paddingTop:'3rem'}}>
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-8">
            <div class="image-holder">
              <img src="images/single-image3.jpg" alt="single" class="single-image img-fluid" style={{height:'30rem', width:'38rem',}} />
            </div>
          </div>
          <div class="about-content bg-gray col-lg-4 m-auto top-0 end-0 bottom-0">
            <h3 class="py-3">Who are we</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus doloribus provident quidem molestias! Dolorum animi distinctio illo error possimus, ex consequatur, obcaecati nisi suscipit impedit aliquid fugit ipsa aut.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita esse culpa consequuntur porro labore
            </p>
            <a href="about.html" class="btn">About us →</a>
          </div>
        </div>
      </div>
    </section>

      <div class="container display-header d-flex flex-wrap justify-content-between pb-4">
        <h3 >Best selling Items</h3>
        <div class="btn-right d-flex flex-wrap align-items-center">
          <a href="/AllBooks" class="btn me-5" style={{fontSize:'1.5rem'}}>View all items →</a>
        </div>
      </div>
      <div className='book-container'>
       {limitedBooks && limitedBooks.map((book, i) => (
            <li key={i}>
              <SingleBook book={book} />
            </li>
          ))}
            </div>
        </>
           
  )
}
