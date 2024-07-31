import React from 'react';
import { useCart } from '../CartContext';

const Checkout = () => {
  const { getCartItems } = useCart();
  const cartItems = getCartItems();

  const handleCheckout = () => {
    
    alert('Checkout complete!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Compra completa</button>
    </div>
  );
};

export default Checkout;

