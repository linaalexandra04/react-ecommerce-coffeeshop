import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/navbar.css';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <CartWidget cartItemCount={cartItemCount} />
      </ul>
    </nav>
  );
}

export default NavBar;

