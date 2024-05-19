import React from 'react';
import CartWidget from './CartWidget';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>La Casa del Café</h1>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#inicio">Inicio</a></li>
        <li className="navbar-item"><a href="#nuestro-cafe">Nuestro Café</a></li>
        <li className="navbar-item"><a href="#shop">Shop</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};


export default NavBar;