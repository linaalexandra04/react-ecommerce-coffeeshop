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
    <div>
      <h2>{greeting}</h2>
      <div className="history">
        <h3 className="title ">Nosotros</h3>
        <div className="description">
        <p>Nuestra historia comienza en 1980, cuando un pequeño equipo de entusiastas del café decidió abrir una tienda en el corazón de la ciudad. Con el paso de los años, la tienda creció en popularidad gracias a la calidad y el sabor excepcional de nuestros productos. Hoy en día, La Casa del Café es conocida por su dedicación a la excelencia y su compromiso con los métodos tradicionales de tostado y preparación de café.</p>
        <p>En 1995, adquirimos nuestra primera tostadora industrial, una máquina que revolucionó nuestra forma de trabajar. La tostadora, apodada cariñosamente "La Abuela" por nuestro equipo, permitió un control preciso sobre el proceso de tostado, asegurando que cada lote de granos de café alcanzara su máximo potencial de sabor.</p>
        <p>Con "La Abuela" a nuestro lado, formamos un equipo de maestros tostadores dedicados. Cada miembro del equipo aporta su experiencia y pasión por el café, trabajando juntos para crear mezclas únicas y perfectas. Desde el primer grano hasta la última gota en tu taza, nos aseguramos de que cada etapa del proceso sea realizada con el máximo cuidado y atención al detalle.</p>
        </div>
      </div>
      <h3 className="title">Nuestro Café</h3>
      <div className="description">
        <p>Bienvenido a La Casa del Café, una tienda dedicada a ofrecer los mejores granos de café. Fundada en 1980, con una pequeña tienda familiar, nos dedicamos a brindar una experiencia única con cada taza de café que servimos. Nuestro café es cuidadosamente seleccionado y tostado para garantizar la mejor calidad y sabor.</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

