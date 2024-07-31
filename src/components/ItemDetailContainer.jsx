import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ productId }) => {
  return (
    <div>
      <ItemDetail productId={productId} />
    </div>
  );
};

export default ItemDetailContainer;