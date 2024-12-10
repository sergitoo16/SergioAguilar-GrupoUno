// Navbar.js
import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <div>
        <span>Carrito: {cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;