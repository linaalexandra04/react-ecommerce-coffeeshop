import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/cafe-fino">Café Fino</Link></li>
        <li><Link to="/category/cafe-medio">Café Medio</Link></li>
        <li><Link to="/category/cafe-grueso">Café Grueso</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

