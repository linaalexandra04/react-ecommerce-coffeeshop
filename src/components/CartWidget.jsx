import React from 'react';
import '../styles/cartwidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i class='bx bx-cart'></i>
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;