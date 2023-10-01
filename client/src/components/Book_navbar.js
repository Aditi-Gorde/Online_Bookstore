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

export default function Book_navbar() {

  const editClick = () => {
    toast.success('Choose the book to be Edited', {
      position: 'top-right',
      autoClose: 3000,  
    });
  };
  
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
    <a className="navbar-brand" href="/">Booktopia</a>
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
            <li><a className="dropdown-item" href="/AllBooks" onClick={editClick}>Update</a></li>
            <li><a className="dropdown-item" href="/AllBooks" onClick={editClick}>Delete</a></li>
            <ToastContainer />
          </ul>
        </li>
      </ul>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a className="nav-link" href={`/Cart`}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#000000",}} />  Cart</a>
            
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/AllBooks">All Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About Us</a>
          </li>
        </ul>
      </div>
      <form className="d-flex align-items-center" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#050505",marginRight:'1rem'}} />
      </form>
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
