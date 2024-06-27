import React from 'react';
import ProductCard from './ProductCard';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
