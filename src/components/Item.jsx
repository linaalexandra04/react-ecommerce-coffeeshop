import React from 'react';
import { Link } from 'react-router-dom';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const Item = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemQuantitySelector product={product} />
      <AddItemButton product={product} />
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default Item;
