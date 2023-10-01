import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home.js'
import Book_navbar from './components/Book_navbar.js'
import { SignUp } from "./pages/signUp";
import { Login } from "./pages/login";
import { useAuthContext } from "./hooks/useAuthContext";
import {AddBook} from "./components/AddBook";
import {BookDetail} from "./components/BookDetail";
import {Cart} from "./pages/Cart"
import Footer from './components/Footer';
import AllBooks from './pages/AllBooks.js';
import About from './pages/About.js';
import BookData from './pages/BookData.js';

function App() {
  const { user } = useAuthContext();

  const someUser = localStorage.getItem("user");
  return (
  <>
  <Book_navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path='/AddBook' element={<AddBook />} />
    <Route path="/BookDetail/:id" element={<BookDetail />} exact />
    <Route path="/login" element={!someUser ? <Login /> : <Navigate to="/" />}/>
    <Route path="/About" element={<About />} />
    <Route path="/Cart" element={<Cart />} exact />
    <Route path="/AllBooks" element={<AllBooks />} exact />
    <Route path="/AllBooks/:id" element={<BookData />} exact />
  </Routes>
  {/* <AllBooks /> */}
  <Footer />
  </>
  );
}

export default App;
