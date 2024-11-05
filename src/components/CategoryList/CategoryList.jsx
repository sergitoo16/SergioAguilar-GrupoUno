// src/CategoryList.jsx
import React from 'react';

const CategoryList = ({ categories }) => {
    return (
        <div>
            {categories.map(category => (
                <div key={category.id}>
                    <h3>{category.name}</h3>
                    <img src={category.image} alt={category.name} />
                </div>
            ))}
        </div>
    );
};

export default CategoryList;