import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contacto</h3>
                    <p>Email: info@juguetesfantasticos.com</p>
                    <p>Teléfono: +56 9 33452779</p>
                </div>
                <div className="social-media">
                    <h3>Síguenos</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com/ch1no.free" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Juguetes Fantásticos. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;