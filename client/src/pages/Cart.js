//Cart functionality to display the cart and items in it

import React from "react";
import CartItem from "../components/CartItem"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleBook from "../components/SingleBook";
import "../assets/cart.style.css"

function Cart() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/Cart')
          .then((response) => {
            setBooks(response.data.books);
            console.log(books);
          })
          .catch((error) => {
            console.log("error");
            console.error(error);
          });
      }, []);

    return(
        <section className="cart-items">
            <h2 className="heading">Cart</h2>
            <div className="container">
            <div>
                    {books.map((book, i) => (
                        <li key={i}>
                            <CartItem book={book} />
                        </li>
                    ))}
                </div>
            </div>
        </section>
    )
}

export {Cart};