// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa tu componente principal App
import './index.css'; // Importa estilos globales si los tienes
// index.js
import './main'; // Importa tu archivo main.js

// Crea un contenedor para la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del contenedor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);