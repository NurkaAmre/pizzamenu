import React from 'react';
import '../index.css';
import Order from './Order';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} isOpen={isOpen} />
      ) : (
        <span>
          We're closed! We're happy to welcome between {openHour}:00 -{' '}
          {closeHour}:00
        </span>
      )}
    </footer>
  );
}
