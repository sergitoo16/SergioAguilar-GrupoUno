// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ items }) => {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const product = items.find(item => item.id === parseInt(id)); // Busca el producto por ID

  if (!product) {
    return <p>Producto no encontrado.</p>; // Mensaje si el producto no se encuentra
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={() => console.log(`Agregado al carrito: ${product.name}`)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetails;