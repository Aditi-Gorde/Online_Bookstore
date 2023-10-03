//Navigation Bar

import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Book_navbar.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

export default function Book_navbar() {

  const editClick = () => {
    toast("Choose the book to be Edited", {
      position: 'top-center',
      theme: "dark",
      hideProgressBar: true,
      autoClose: 3000,  

    });
    setTimeout(() => {
      navigateToBooks();
    }, 1000); 
  };

  const navigate = useNavigate()

  const navigateToBooks = () => {
    navigate("/AllBooks")
}
  
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    const token = localStorage.getItem("user");
    logout(token);
  };
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary  " style={{padding:'1rem'}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">INKSTORY</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-disabled="true">
            Edit
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/AddBook" className="dropdown-item">
                Add Book
              </NavLink></li>
              <li><hr className="dropdown-divider" /></li>
            <li><Button className="dropdown-item" onClick={editClick}>Update</Button></li>
            <ToastContainer />
            <li><a className="dropdown-item" href="/AllBooks" onClick={editClick}>Delete</a></li>
            <ToastContainer />
          </ul>
        </li>
      </ul>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <NavLink className="nav-link" to="/AllBooks">All Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About Us</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Cart" className="nav-link"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{ color: "#000000", }} />  Cart</NavLink>
          </li>


        </ul>
      </div>
      {/* <form className="d-flex align-items-center" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#050505",marginRight:'1rem'}} />
      </form> */}
      <div className="navbar-end" >

          {user ? (
            <div className="navbar-item" >
              <NavLink to="/" className="nav_login" onClick={handleClick}>
                Log Out
              </NavLink>
            </div>
          ) : (
            <div className="navbar-item">
              <NavLink to="/signup" className="nav_signup">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="nav_login">
                Log In
              </NavLink>
            </div>
          )}
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}
