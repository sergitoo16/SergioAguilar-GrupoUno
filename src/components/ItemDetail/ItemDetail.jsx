import React from 'react';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div key={item.id} className="item">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;