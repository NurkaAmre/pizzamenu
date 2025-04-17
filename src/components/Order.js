import React from 'react';

export default function Order({ closeHour, openHour, isOpen }) {
  return (
    <div className="order">
      <p>
        {isOpen ? (
          <span>
            We're open until {closeHour}:00. Come visti us or order online
          </span>
        ) : (
          <span>
            We're closed! We're happy to welcome between {openHour}:00 -{' '}
            {closeHour}:00
          </span>
        )}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
