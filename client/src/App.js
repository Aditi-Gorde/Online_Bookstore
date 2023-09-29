import logo from './logo.svg';
import {Routes, Route, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home.js'
import Book_navbar from './components/Book_navbar.js'
import ImageCard from './components/ImageCard.js';
import BestSelling from './components/BestSelling';

import { SignUp } from "./pages/signUp";

import { Login } from "./pages/login";

import { useAuthContext } from "./hooks/useAuthContext";

import {AddBook} from "./components/AddBook";
import {BookDetail} from "./components/BookDetail";
//import BookDetail from './components/BookDetail';
import Footer from './components/Footer';

function App() {
  const { user } = useAuthContext();

  const someUser = localStorage.getItem("user");
  return (
  //   <Router>
  //      <>
  //  <Routes>
  //  <Route path="/" element={<Book_navbar/>} />
  //   <Route path="/" element={<Home/>} />
  //  </Routes>
  //  </>
  //   </Router>
  <>
  <Book_navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path='/AddBook' element={<AddBook />} />
  <Route path="/BookDetail" element={<BookDetail />} />
<Route

  path="/login"

  element={!someUser ? <Login /> : <Navigate to="/" />}

/>
{/* <Route path="/AddBook" element={<AddBook />} />
<Route path="/BookDetail/:id" element={<BookDetail />} exact /> */}

  </Routes>
  <Footer />
  </>
 
  
  );
}

export default App;
