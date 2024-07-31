import React from 'react';
import { useCart } from '../CartContext';

const CartWidget = () => {
  const { getCartItems } = useCart();
  const cartItems = getCartItems();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <span>Cart ({totalItems})</span>
    </div>
  );
};

export default CartWidget;