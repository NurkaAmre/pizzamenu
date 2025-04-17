import React from 'react';
import '../index.css';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
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
    </footer>
  );
}
