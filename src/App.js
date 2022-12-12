import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MyCart from "./Components/cart/MyCart";
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Book from "./Pages/BookList";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/loginpage' element={< LoginPage />}></Route>
          <Route exact path='/registerpage' element={< RegisterPage />}></Route>
          <Route exact path='/BookList' element={<Book />}></Route>
          <Route exact path='/Cart' element={<Cart />}></Route>
          <Route exact path='/Order' element={<Order />}></Route>
          {/* <Route exact path='/detail' element={<BookDetails />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;