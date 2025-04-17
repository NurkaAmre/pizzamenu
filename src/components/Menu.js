import React from 'react';
import '../index.css';
import Pizza from './Pizza';
import pizzaData from '../data';

export default function Menu() {
  const numberPizza = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        {numberPizza > 0 && (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza {...pizza} key={pizza.name} />
            ))}
            {/* <Pizza
          <Pizza
            name="Pizza Margerita"
            ingredients="Tomato, mozarella and ricotta cheese"
            photoName="/margherita.jpg"
            price={12.99}
          /> */}
          </ul>
        )}
      </>
    </main>
  );
}
