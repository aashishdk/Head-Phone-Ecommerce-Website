import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from './productslist';
import { useCart } from './CartProvider'; // import the context

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center mt-10 text-red-500">Product not found.</div>;
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white mt-10 px-6 py-10 flex-col">
            <div className="flex flex-col justify-center items-center md:flex-row bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md w-full max-w-2xl text-center md:text-left">
                {/* Image section */}
                <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
                    <div className="w-50 h-50 md:w-48 md:h-48 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg ">
                        <img src={product.image} alt={product.name} className="w-40 h-40 object-contain" />
                    </div>
                </div>
                {/* Details section */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-3xl font-bold mb-2 text-purple-700 dark:text-white">{product.name}</h1>
                    <p className="text-lg mb-4 text-purple-600 dark:text-white">{product.price}</p>
                    <p className="text-sm mb-6 max-w-md text-gray-600 dark:text-gray-300">
                        This is a detailed description of the product. You can add technical specs, features, or other info here.
                    </p>
                    <ul className="list-disc pl-5 text-sm mb-6 max-w-md text-gray-600 dark:text-gray-300">
                        <li>Portable Foldable Headphones</li>
                        <li>Loud Bass & Good Sound Quality</li>
                        <li>40mm speaker</li>
                        <li>Long 1.2M Cable</li>
                        <li>1 Year Warranty</li>
                    </ul>
                    <button
                        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-200"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;