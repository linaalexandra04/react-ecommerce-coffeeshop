import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, 'products', productId);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct(productSnapshot.data());
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemQuantitySelector product={product} />
      <AddItemButton product={product} />
    </div>
  );
};

export default ItemDetail;

