import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear un proveedor para envolver la aplicación
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funciones para manejar el carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log('çart',cartItems)
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};