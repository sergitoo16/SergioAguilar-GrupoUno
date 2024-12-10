// Loading.js
import React from 'react';
import './Loading.css'; // Asegúrate de crear un archivo CSS para estilos

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loading;