import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/Theme.jsx';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './components/CartProvider.jsx';
import Cart from './components/cart.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider> 
        <ThemeProvider>
          <AnimatePresence mode="wait">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/register" element={<Register />} />
            </Routes>
          </AnimatePresence>
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
