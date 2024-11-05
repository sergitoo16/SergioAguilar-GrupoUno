// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import './Header.css'; // Asegúrate de crear este archivo CSS

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Juguetes Fantásticos</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/ofertas">Ofertas</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <div className="cart">
                <Link to="/cart">
                    <button className="cart-button">🛒 Carrito</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;