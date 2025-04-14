import React from 'react';
import '../index.css';
import Pizza from './Pizza';

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">
          <Pizza
            name="Pizza Spinacci"
            ingredients="Mozarella, tomato, spinach and ricotta cheese"
            photoName="./public.spinaci.jpg"
            price={12.99}
          />
        </ul>
      </>
    </main>
  );
}
