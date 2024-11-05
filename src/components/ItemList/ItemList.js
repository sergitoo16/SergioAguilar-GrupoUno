import React from 'react';
import './ItemList.css'; // Asegúrate de crear este archivo CSS

const ItemList = ({ items = [] }) => { // Inicializa items como un array vacío
    return (
        <div className="item-list">
            {items.length > 0 ? ( // Verifica si hay items
                items.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h2 className="item-name">{item.name}</h2>
                        <p className="item-description">{item.description}</p>
                        <p className="item-price">${item.price}</p>
                        <button className="add-to-cart">Agregar al Carrito</button>
                    </div>
                ))
            ) : (
                <p>No hay items disponibles.</p> 
            )}
        </div>
    );
};

export default ItemList;