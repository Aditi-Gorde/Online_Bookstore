import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import '../assets/Book_navbar.style.css'


export default function Book_navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    const token = localStorage.getItem("user");
    logout(token);
  };
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{padding:'1rem'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Booktopia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-disabled="true">
            Edit
          </a>
          <ul class="dropdown-menu">
            <li><NavLink to="/AddBook" className="dropdown-item">
                Add Book
              </NavLink></li>
            <li><a class="dropdown-item" href="/BookDetail">Update</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Delete</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn" type="submit">Search</button>
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

          {user ? (
            <div className="navbar-item">
              <NavLink to="/" className="nav_login" onClick={handleClick}>
                Log Out
              </NavLink>
            </div>
          ) : (
            <div className="navbar-item">
              <NavLink to="/signup" className="nav_signup">
                Sign Up
              </NavLink>
              <NavLink to="s/login" className="nav_login">
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
