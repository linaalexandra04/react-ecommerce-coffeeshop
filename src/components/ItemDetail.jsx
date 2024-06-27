import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <Description description={product.description} />
      <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
      <AddItemButton onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;


