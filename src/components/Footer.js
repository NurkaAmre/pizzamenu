import React from 'react';
import '../index.css';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <p>
        {isOpen && (
          <span>
            We're open until {closeHour}:00. Come visti us or order online
          </span>
        )}
      </p>
    </footer>
  );
}
