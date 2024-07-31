import React from 'react';
import { useCart } from '../CartContext';

const AddItemButton = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <button onClick={handleAddToCart}>Añadir al carrito</button>
  );
};

export default AddItemButton;
