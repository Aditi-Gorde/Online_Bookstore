//Home Page

import * as React from 'react/jsx-runtime';
import ReactDOM from 'react-dom';
import '../assets/Home.style.css'
import SingleBook from './SingleBook'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function Home() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_backend_url}/books`)
      .then((response) => {
        setBooks(response.data.books);
        console.log(books);
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
console.log(books);
  if (!Array.isArray(books)) {
    return <div>No books available</div>;
  }
  const limitedBooks = books.slice(5, 8);
  return (
        <>
            <div className="container div1">
              <div className="image">
                  <img className='mainImg' src={process.env.PUBLIC_URL + '/images/post-item4.jpg'} alt='demo book' />
              </div>
              <div className="text">
              <h2 className='homeH2'>Welcome to INKSTORY </h2>
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
                <p>"Enjoy free, fast, and convenient delivery on all your favorite books!"</p>
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
                <p>"Discover quality guaranteed - every book, every time."</p>
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
                <p>"Explore our daily offers and uncover new book treasures every day!"</p>
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
                <p>"Shop with confidence! Your payments are 100% secure with us."</p>
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
            <p>"We are more than just an online bookstore; we are your literary sanctuary. Our passion for books drives us to curate a diverse collection, catering to every reader's taste and preference. With a commitment to quality and customer satisfaction, we strive to provide you with a seamless and enjoyable reading experience.Join us on this literary journey as we connect readers with the magic of words, one page at a time."
            </p>
            <NavLink to="/About" class="btn" style={{color:'black'}}>About us →</NavLink>
          </div>
        </div>
      </div>
    </section>

      <div class="container display-header d-flex flex-wrap justify-content-between pb-4">
        <h3 >Best selling Items</h3>
        <div class="btn-right d-flex flex-wrap align-items-center">
          <NavLink to="/AllBooks" class="btn me-5" style={{fontSize:'1.2rem',color:'black'}}>View all items →</NavLink>
        </div>
      </div>
      <div className='book-container flex-lg-nowrap flex-wrap' style={{width:'25%!',height:'auto'}}>
      {/* <Row lg={3} md={2} sm={1} >
            {limitedBooks.map((book, i) => (
              <Col className='d-flex mw-100 w-20 mx-auto mb-3'>
                <li style={{width:'100%'}} key={i}>
                  <SingleBook book={book} className="flex-fill" />
                </li>
              </Col>
            ))}
      </Row> */}
       {limitedBooks && limitedBooks.map((book, i) => (
            <li key={i}>
              <SingleBook book={book} />
            </li>
          ))}
            </div>
        </>
           
  )
}
