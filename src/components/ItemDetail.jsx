import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); 
  };

  return (
    <div className="item-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        min="1"
      />
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;


