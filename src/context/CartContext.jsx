import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(0);

  const handleAdd = () => {
    setCartState(cartState + 1); 
  };
  const handleRemove = () => {
    setCartState(cartState - 1);
  };

  return (
    <CartContext.Provider value={{ cartState, setCartState, handleRemove, handleAdd }}>
      {children}
    </CartContext.Provider>
  );
};
