import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;
