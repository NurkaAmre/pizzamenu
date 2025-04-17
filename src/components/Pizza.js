import React from 'react';

export default function Pizza({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}) {
  return (
    <li className="pizza">
      <img src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}
