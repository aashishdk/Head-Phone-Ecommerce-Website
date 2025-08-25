import React from "react";
import { useCart } from "./CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
      return;
    }
    
    // Check if user is logged in (replace with your auth logic)
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      alert("You must be logged in to checkout.");
      navigate("/login");
      return;
    }
    
    // Proceed with checkout
    alert("Proceeding to checkout...");
  };

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + (price * (item.quantity || 1));
  }, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-16 justify-between min-h-screen bg-gray-100 dark:bg-gray-900 px-10 py-10">
      {/* Cart Items */}
      <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-black text-center dark:text-white">Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Your cart is empty</p>
            <button 
              onClick={() => navigate("/products")}
              className="mt-4 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition duration-200"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b border-gray-300 dark:border-gray-700">
              <tr>
                <th className="pb-4 text-black dark:text-white">Item</th>
                <th className="pb-4 text-black dark:text-white">Remove</th>
                <th className="pb-4 text-black dark:text-white">Price</th>
                <th className="pb-4 text-black dark:text-white">Qty</th>
                <th className="pb-4 text-black dark:text-white">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
                const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
                const quantity = item.quantity || 1;
                const itemSubtotal = price * quantity;
                
                return (
                  <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-6">
                      <div className="flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 object-contain mr-4 rounded" 
                        />
                        <div className="text-black dark:text-white font-medium">
                          {item.name}
                        </div>
                      </div>
                    </td>
                    <td className="py-6">
                      <button 
                        onClick={() => removeFromCart(idx)}
                        className="text-red-600 hover:text-red-800 transition duration-200"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <FontAwesomeIcon icon={faTrash} className="text-lg" />
                      </button>
                    </td>
                    <td className="py-6 text-purple-700 dark:text-purple-400 font-semibold">
                      ${price.toFixed(2)}
                    </td>
                    <td className="py-6">
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value) || 1;
                          updateQuantity(idx, newQuantity);
                        }}
                        className="w-16 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </td>
                    <td className="py-6 font-bold text-black dark:text-white">
                      ${itemSubtotal.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary Box */}
      <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-fit">
        <h3 className="text-xl font-bold text-black dark:text-white mb-6">ORDER SUMMARY</h3>
        
        <div className="text-gray-800 dark:text-gray-300 mb-6 space-y-3">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="font-semibold">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span className="font-semibold">${(subtotal * 0.08).toFixed(2)}</span>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />
          <div className="flex justify-between text-lg font-bold text-black dark:text-white">
            <span>Total:</span>
            <span className="text-red-600 dark:text-red-400">
              ${(subtotal * 1.08).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Discount Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter code"
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200 whitespace-nowrap">
              Apply
            </button>
          </div>
        </div>

        <button 
          onClick={handleCheckout} 
          disabled={cart.length === 0}
          className={`w-full py-3 rounded font-semibold transition duration-200 ${
            cart.length === 0 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800'
          }`}
        >
          {cart.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
        </button>
        
        <button 
          onClick={() => navigate("/products")}
          className="w-full mt-3 py-3 border border-purple-700 text-purple-700 dark:text-purple-400 dark:border-purple-400 rounded font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;