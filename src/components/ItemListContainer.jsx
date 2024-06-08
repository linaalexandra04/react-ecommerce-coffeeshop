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
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

