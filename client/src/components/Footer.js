import React from 'react';
import '../assets/Footer.style.css';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Our Bookstore is your one-stop shop for all your reading needs. Browse our vast collection of books and discover your next favorite read.</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/books">Books</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Cart</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect with Us</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; {new Date().getFullYear()} Your Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
