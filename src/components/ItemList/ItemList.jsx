
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';


const ItemList = ({ items, onAdd }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ProductItem key={item.id} product={item} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ItemList;
