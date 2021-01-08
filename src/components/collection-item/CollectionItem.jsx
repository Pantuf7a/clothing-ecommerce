import React from 'react'

import './CollectionItem.scss';


export const CollectionItem = ({ id, name, price, imageUrl}) => {
  return (
    <div className="collection__item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="collection__footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}
