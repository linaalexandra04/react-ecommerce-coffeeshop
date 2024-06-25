import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} className="product-image" />
      <Link to={`/item/${product.id}`}>
        <button>Ver Producto</button>
      </Link>
    </div>
  );
};

export default ProductCard;
