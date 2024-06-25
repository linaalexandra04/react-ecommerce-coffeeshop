import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/navbar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;

