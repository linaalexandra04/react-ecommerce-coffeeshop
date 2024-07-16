import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ product, quantity }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return <button onClick={handleAddToCart}>Añadir al carrito</button>;
};

export default AddItemButton;
