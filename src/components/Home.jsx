import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// Import your assets
import mainheadphone from '../assets/headphone 1.png';
import firstheadphone from '../assets/head3 1.png';
import secondheadphone from '../assets/head 4.png';
import thirdheadphone from '../assets/head2 1.png';

// Import cart context and products
import { useCart } from './CartProvider';
import productsList from './productslist';

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [productMssg, setProductMsg] = useState('');

  const handleNavigation = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductMsg('Product added to cart successfully!');
    setTimeout(() => setProductMsg(''), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Hero Section */}
      <div className="flex flex-col min-h-fit md:flex-row justify-center items-center h-screen bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-all px-8">
        {/* Text Section */}
        <div className="w-full pr-8 px-10 mt-32">
          <h1 className="text-5xl font-extrabold mb-2 text-purple-700 md:mb-6 dark:text-purple-600 tracking-wide">IMMERSE</h1>
          <h1 className="text-5xl font-extrabold mb-6 text-purple-700 dark:text-purple-600 tracking-wide">YOURSELF IN SOUND</h1>
          <p className="text-lg leading-7 pr-6 md:pr-20 lg:pr-30 text-gray-600 dark:text-gray-300">
            Join the audio revolution today and experience a world of sound like never before. Elevate your audio experience, and take the first step towards a deeper connection with your music, games, and podcasts.
          </p>
          <button
            onClick={() => handleNavigation('/Products')}
            className="px-8 py-3 bg-purple-900 dark:bg-purple-800 hover:bg-green-600 text-white transition duration-200 mt-6 cursor-pointer"
          >
            Shop Now
          </button>

          {/* Headphones Section with 30% badge */}
          <div className="relative mt-12">
            {/* 30% Circle Badge */}
            <div className="absolute -top-12 left-63 transform -translate-x-[60%]">
              <div className="w-15 h-15 rounded-full px-6 bg-[#EE3B4B] text-white flex items-center justify-center text-xs font-bold shadow-lg dark:brightness-85 text-shadow-white">
                30% OFF!!
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <Link to="/Products" className="inline-block hover:scale-105 cursor-pointer transition-transform">
                <span className="w-28 h-25 px-8 py-3 mt-5 bg-[#7AE3DB] dark:brightness-75 rounded-2xl block">
                  <img src={firstheadphone} alt="First Headphone" className="items-center pt-2" />
                </span>
              </Link>
              <Link to="/Products" className="inline-block hover:scale-105 cursor-pointer transition-transform">
                <span className="w-28 h-25 px-8 py-3 mt-5 bg-[#FBC3D4] dark:brightness-75 rounded-2xl block">
                  <img src={secondheadphone} alt="Second Headphone" className="items-center pt-2" />
                </span>
              </Link>
              <Link to="/Products" className="inline-block hover:scale-105 cursor-pointer transition-transform">
                <span className="w-28 h-25 px-8 py-3 mt-5 bg-[#7AE3DB] dark:brightness-75 rounded-2xl block">
                  <img src={thirdheadphone} alt="Third Headphone" className="items-center pt-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Headphone Image and Social Icons */}
        <div className="w-1/2 mt-16 flex flex-col items-center">
          <img
            src={mainheadphone}
            alt="Headphones"
            className="max-w-xl mt-10 h-auto dark:brightness-95 transition-transform transform hover:scale-105 cursor-pointer"
          />

          {/* Social Icons below image aligned right */}
          <div className="flex justify-end w-full mt-4 gap-4 pr-8 text-2xl text-gray-700 dark:text-white">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareFacebook} className="text-blue-600 cursor-pointer hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} className="text-pink-500 cursor-pointer hover:text-pink-700" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} className="text-blue-400 cursor-pointer hover:text-blue-600" />
            </a>
          </div>

          <div className="flex justify-end w-full mt-4 mb-6 pr-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Copyright © 2023 Aashish Dhakal. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 py-10 w-full">
        {/* Success Message */}
        {productMssg && (
          <div className="fixed top-14 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50 transition">
            {productMssg}
          </div>
        )}
        
        <h1 className="text-4xl font-bold text-purple-700 dark:text-white m-16 text-center">Featured Products</h1>
        
        <div className="grid grid-cols-2 px-12 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {productsList.map((product) => (
            <div key={product.id} className="w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg duration-200 hover:scale-103 cursor-pointer transition-transform flex flex-col items-center">
              <Link to={`/product/${product.id}`} className="mb-4">
                <img src={product.image} alt={product.name} className="w-28 h-28 object-contain" />
              </Link>
              <h3 className="font-bold text-center text-purple-800 dark:text-white">{product.name}</h3>
              <p className="text-sm text-center text-purple-700 dark:text-white mt-1">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-200 cursor-pointer mt-4"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;