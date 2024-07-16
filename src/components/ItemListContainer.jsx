import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let q;
      if (categoryId) {
        q = query(collection(db, 'products'), where('category', '==', categoryId));
      } else {
        q = collection(db, 'products');
      }
      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;


