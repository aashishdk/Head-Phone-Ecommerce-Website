import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './Theme.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartProvider';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white dark:bg-gray-800 transition-all dark:border-gray-700 fixed top-0 w-full z-50">
      {/* Logo */}
      <Link to="/Home" className="text-3xl font-bold text-indigo-500" onClick={closeMenu}>
        <h1 className="text-2xl md:text-3xl text-indigo-700 font-sans font-extrabold">AHeadphones</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          to="/Home"
          className="text-lg font-bold text-indigo-500 hover:text-green-600 dark:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          to="/About"
          className="text-lg font-bold text-indigo-500 hover:text-green-600 dark:text-white transition-colors"
        >
          About
        </Link>
        <Link
          to="/Products"
          className="text-lg font-bold text-indigo-500 hover:text-green-600 dark:text-white transition-colors"
        >
          Products
        </Link>
        <Link
          to="/Login"
          className="cursor-pointer px-6 py-2 bg-fuchsia-600 hover:bg-green-600 transition text-white rounded-full"
        >
          Login
        </Link>
        <Link
          to="/Register"
          className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-green-600 transition text-white rounded-full"
        >
          Register
        </Link>
        <Link to="/cart" className="relative">
          <FontAwesomeIcon icon={faCartShopping} className="w-8 h-8 text-indigo-500 cursor-pointer hover:text-green-600 transition-colors" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
        <svg
          onClick={changeTheme}
          className="w-7 h-7 cursor-pointer text-indigo-400 dark:text-blue-400 hover:text-green-600 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill={theme === 'dark' ? '#60a5fa' : '#000'}
        >
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>
      </div>

      {/* Mobile/Tablet Navigation Icons */}
      <div className="flex items-center gap-4 lg:hidden">
        {/* Cart Icon */}
        <Link to="/cart" className="relative" onClick={closeMenu}>
          <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-indigo-500 cursor-pointer hover:text-green-600 transition-colors" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Theme Toggle */}
        <svg
          onClick={changeTheme}
          className="w-6 h-6 cursor-pointer text-indigo-400 dark:text-blue-400 hover:text-green-600 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill={theme === 'dark' ? '#60a5fa' : '#000'}
        >
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-indigo-500 dark:text-white hover:text-green-600 transition-colors p-2"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon 
            icon={isMenuOpen ? faTimes : faBars} 
            className="w-6 h-6" 
          />
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-gray-800 z-40 lg:hidden">
          <div className="flex flex-col items-center py-8 space-y-6">
            <Link
              to="/Home"
              className="text-xl font-bold text-indigo-500 hover:text-green-600 dark:text-white transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-xl font-bold text-indigo-500 hover:text-green-600 dark:text-white transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/Products"
              className="text-xl font-bold text-indigo-500 hover:text-green-600 dark:text-white transition-colors"
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              to="/Login"
              className="cursor-pointer px-8 py-3 bg-fuchsia-600 hover:bg-green-600 transition text-white rounded-full text-lg"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="cursor-pointer px-8 py-3 bg-indigo-500 hover:bg-green-600 transition text-white rounded-full text-lg"
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;