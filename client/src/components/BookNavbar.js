//Navigation Bar

import React from 'react'
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Book_navbar.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BookNavbar() {

  
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    const token = localStorage.getItem("user");
    logout(token);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  " style={{ padding: '1rem' }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">INKSTORY</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

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
            {/* <Search /> */}
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
