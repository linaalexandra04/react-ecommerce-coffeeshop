import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/async-mocks';
import '../styles/productos.css';

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.name}</h3>
          <img src={product.image} alt={product.name} className="product-image" />
          <Link to={`/item/${product.id}`}>
            <button>Ver Producto</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Productos;