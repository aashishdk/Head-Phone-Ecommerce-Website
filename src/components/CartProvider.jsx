import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, idx) => idx !== indexToRemove));
  };

  const updateQuantity = (index, newQuantity) => {
    setCart(prevCart =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
