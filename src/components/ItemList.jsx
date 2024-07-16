import React from 'react';
import AddItemButton from './AddItemButton';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <div key={product.id} className="item">
          <img src={product.image} alt={product.name} className="gs://coffee-shop-91c91.appspot.com/2.png" />
          <h3>{product.name}</h3>
          <p>Precio: {product.price}</p>
          <AddItemButton product={product} quantity={1} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
