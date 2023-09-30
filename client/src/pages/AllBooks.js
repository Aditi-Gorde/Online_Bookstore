//To display all the books using pagination

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch books from the API
    axios
      .get(`/?page=${currentPage}`)
      .then((response) => {
        setBooks(response.data.books);
        console.log(books);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <p>Title: {book.title}</p>
            <p>Authors: {book.authors}</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default AllBooks;
//.get(`/api/books?page=${currentPage}`)
//app.get('/api/books', async (req, res) =>