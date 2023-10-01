//To display all the books using pagination

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBook from '../components/SingleBook';
import '../assets/AllBooks.style.css'
import PaginatedBook from '../components/PaginatedBook';

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch books from the API
    //?page=${currentPage}
    axios
      .get(`http://localhost:5000/books/?page=${currentPage}`)
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
      <h2 className='heading'>Book List</h2>
      <div className='book-container'>
      <div className="container">
      <div className="row">
        {books.map((book,i) => (
          <li key={i}>
           <PaginatedBook book={book} />
          </li>
        ))}
      </div>
      </div>
      </div>
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