// src/components/Category/Category.jsx
import React from 'react';
import './Category.css'; // Asegúrate de crear este archivo CSS

const Category = ({ categories = [] }) => { // Inicializa categories como un array vacío
    return (
        <div className="category-list">
            {categories.length > 0 ? (
                categories.map((category) => (
                    <div className="category" key={category.id}>
                        <h2>{category.name}</h2>
                        {/* Otros detalles de la categoría */}
                    </div>
                ))
            ) : (
                <p>No hay categorías disponibles.</p> // Mensaje si no hay categorías
            )}
        </div>
    );
};

export default Category; // Asegúrate de que esta línea esté presente