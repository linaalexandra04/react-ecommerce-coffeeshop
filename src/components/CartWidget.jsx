import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import '../styles/cartwidget.css';

const CartWidget = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleCheckout = () => {
    setPurchaseComplete(true);
    clearCart();

    setTimeout(() => {
      setPurchaseComplete(false);
    }, 3000);
  };

  return (
    <div className="cart-widget">
      <button onClick={() => setShowCart(!showCart)}>
      <i class='bx bx-cart'></i> {cartItems.length}
      </button>
      {showCart && (
        <div className="cart-details">
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} 1 prducto: {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={handleCheckout}>Comprar</button>
          </>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
        {purchaseComplete && <p className="purchase-message">¡Gracias por su compra!</p>}
      </div>
    )}
  </div>
);
};

export default CartWidget;