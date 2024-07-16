import React, { useState, useEffect } from 'react';
import AddItemButton from './AddItemButton';
import { getImageUrl } from '../utils/async-mocks';


const ItemList = ({ products }) => {
  const [productsWithImages, setProductsWithImages] = useState([]);

  useEffect(() => {
    const fetchProductImages = async () => {
      const productsWithImages = await Promise.all(
        products.map(async (product) => {
          const imageUrl = await getImageUrl(product.imageName); 
          return { ...product, imageUrl };
        })
      );
      setProductsWithImages(productsWithImages);
    };

    fetchProductImages();
  }, [products]);

  return (
    <div className="item-list">
      {productsWithImages.map(product => (
        <div key={product.id} className="item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Precio: {product.price}</p>
          <AddItemButton product={product} quantity={1} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

