//Cart functionality to display the cart and items in it

import React from "react";
import cartItem from "../components/cartItem"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function cart() {
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);

    return(
        <section className="cart-items">
            <div className="container">
                <h2>Cart</h2>
                <div>
                    {book.map((book, i) => (
                        <li key={i}>
                            <cartItem book={book} />
                        </li>
                    ))}
                </div>
            </div>
        </section>
    )
}

export {cart};