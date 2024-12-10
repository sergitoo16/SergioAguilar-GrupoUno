// Cart.jsx
import React from 'react';
import './Cart.css'; 
const Cart = ({ cartItems, onRemove }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => onRemove(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default Cart;