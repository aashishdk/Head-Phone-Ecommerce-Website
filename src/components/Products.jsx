import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import productsList from './productslist';

const Products = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [productMssg, setProductMsg] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductMsg('Product added to cart successfully!');
    setTimeout(() => setProductMsg(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 py-10 w-full">
      {productMssg && (
        <div className="fixed top-14 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50 transition">
          {productMssg}
        </div>
      )}
      <h1 className="text-4xl font-bold text-purple-700 dark:text-white m-16 text-center">Products</h1>
      <div className="grid grid-cols-2 px-12 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {productsList.map((product) => (
          <div key={product.id} className="w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg  duration-200 hover:scale-103 cursor-pointer transition-transform flex flex-col items-center">
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
  );
};

export default Products;