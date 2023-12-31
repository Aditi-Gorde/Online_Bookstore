//Footer

import React from 'react';
import '../assets/Footer.style.css';
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <>
    <footer className="footer" style={{marginTop:'3rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Our Bookstore is your one-stop shop for all your reading needs. Browse our vast collection of books and discover your next favorite read.</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/Cart">Cart</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect with Us</h3>
            <ul className="social-icons">
              <li><NavLink to="#"><i className="fab fa-facebook"></i></NavLink></li>
              <li><NavLink to="#"><i className="fab fa-twitter"></i></NavLink></li>
              <li><NavLink to="#"><i className="fab fa-instagram"></i></NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; {new Date().getFullYear()} INKSTORY All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
