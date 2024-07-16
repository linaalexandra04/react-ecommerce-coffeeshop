import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import '../styles/cartwidget.css';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleCheckout = () => {
    setPurchaseComplete(true);
    clearCart();
    setTimeout(() => {
      setPurchaseComplete(false);
    }, 3000);
  };

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - Cantidad: {item.quantity}</li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Comprar</button>
          {purchaseComplete && <p>¡Gracias por su compra!</p>}
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;