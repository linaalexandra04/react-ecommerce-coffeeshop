import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
