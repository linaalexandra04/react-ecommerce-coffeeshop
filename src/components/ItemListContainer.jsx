import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../utils/async-mocks';
import '../styles/ItemListContainer.css';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((data) => setProducts(data));
    } else {
      getProducts().then((data) => setProducts(data));
    }
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="history">
        <h3 className="title">Nosotros</h3>
        <div className="description">
          <img src="/img/equipo.png" alt="Historia" className="description-image" />
          <p>
            Nuestra historia comienza en 1980, cuando un pequeño equipo de entusiastas del café decidió abrir una pequeña tostadora.
            En 1995, adquirimos nuestra primera tostadora industrial, una máquina que revolucionó nuestra forma de trabajar.
            Con nuestras maquinas, formamos un equipo de maestros tostadores dedicados.
            La Casa del Café, una tienda dedicada a ofrecer los mejores granos de café.
          </p>
        </div>
      </div>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <button className="product-button">Detalle</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

