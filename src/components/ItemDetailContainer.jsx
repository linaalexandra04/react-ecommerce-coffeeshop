import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../utils/async-mocks';



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
      <h1>{greeting}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;


