import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>La Casa del Café</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/catalogo">Catálogo</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/productos">Productos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

