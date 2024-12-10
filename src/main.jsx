// main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa tu componente principal App
import './index.css'; // Importa estilos globales si los tienes

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);