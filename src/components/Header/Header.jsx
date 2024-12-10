import React from 'react';
import './Header.css';

const Header = ({ toggleCart, onContactClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">ToysKids</h1>
        <p className="header-slogan">¡Los mejores juguetes para tus pequeños!</p>
        <button onClick={toggleCart} className="cart-button" aria-label="Abrir carrito">
          🛒 Carrito
        </button>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto" onClick={onContactClick}>Contacto</a></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;