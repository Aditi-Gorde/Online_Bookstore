//To display all the books using pagination

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBook from '../components/SingleBook';
import '../assets/AllBooks.style.css'
import Pagination from 'react-bootstrap/Pagination';
import { Row, Col, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Search from '../components/Search';


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
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handleSearch = (results) => {
    setBooks(results.books);
  };

  return (
    <div style={{ width: '100%', padding: 30 }}>
      <h2 className='heading'>Book List</h2>
      <div className='w-full' style={{display: 'flex', justifyContent: 'end'}}>
      <Search onSearch={handleSearch}/>
      <Button variant="primary"><NavLink to="/AddBook">Add Book</NavLink></Button>
      </div>
      <div className='book-container'>
          <Row lg={3}>
            {books.map((book, i) => (
              <Col className='d-flex  mw-100 w-25 mx-auto mb-3'>
                <li key={i}>
                  <SingleBook book={book} className="flex-fill" />
                </li>
              </Col>
            ))}
          </Row>
      </div>

      <div className='mx-auto mw-100 d-flex' style={{ justifyContent: 'center' }}>
        <Pagination>
          <Pagination.Prev onClick={() => setCurrentPage(1)} />
          <Pagination.Ellipsis onClick={() => setCurrentPage(currentPage - 1)} />
          <Pagination.Item onClick={() => setCurrentPage(3)}>{3}</Pagination.Item>
          <Pagination.Item onClick={() => setCurrentPage(4)}>{4}</Pagination.Item>
          <Pagination.Item onClick={() => setCurrentPage(5)}>{5}</Pagination.Item>
          <Pagination.Ellipsis onClick={() => setCurrentPage(currentPage + 1)} />
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        </Pagination>
      </div>
    </div>
  );
}

export default AllBooks;
//.get(`/api/books?page=${currentPage}`)
//app.get('/api/books', async (req, res) =>