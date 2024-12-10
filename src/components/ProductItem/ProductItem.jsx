import React, { useState } from 'react'; // Importa React y useState
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './ProductItem.css'; // Asegúrate de tener estilos si es necesario

const ProductCard = ({ product, onAdd }) => {
  const [count, setCount] = useState(0); // Estado para el contador
  const navigate = useNavigate();

  const handleAddProduct = () => {
    onAdd(product);
    setCount(count + 1); // Incrementa el contador al agregar un producto
  };

  const handleDetailsClick = () => {
    navigate(`/detalles/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={handleAddProduct}>Agregar al carrito</button>
      <button onClick={handleDetailsClick} className="details-button">Ver detalles</button>
      <p>Cantidad en carrito: {count}</p> {/* Muestra el contador */}
    </div>
  );
};

export default ProductCard;