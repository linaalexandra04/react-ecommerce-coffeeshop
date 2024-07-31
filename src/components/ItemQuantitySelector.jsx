import React, { useState } from 'react';

const ItemQuantitySelector = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div>
      <label>
        Quantity:
        <input type="number" value={quantity} min="1" onChange={handleQuantityChange} />
      </label>
    </div>
  );
};

export default ItemQuantitySelector;

