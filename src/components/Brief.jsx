import React from 'react';

const Brief = ({ cartItems }) => {
return (
    <div>
    <h2>Detalle de la Compra</h2>
    {cartItems.map(item => (
        <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Cantidad: {item.quantity}</p>
        </div>
    ))}
    </div>
);
};

export default Brief;

