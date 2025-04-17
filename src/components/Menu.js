import React from 'react';
import '../index.css';
import Pizza from './Pizza';
import pizzaData from '../data';

export default function Menu() {
  console.log(pizzaData);
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza {...pizza} />
          ))}
          {/* <Pizza
            name="Pizza Spinacci"
            ingredients="Mozarella, tomato, spinach and ricotta cheese"
            photoName="/spinaci.jpg"
            price={12.99}
          />
          <Pizza
            name="Pizza Focaccia"
            ingredients="Mozarella, tomato, spinach and ricotta cheese"
            photoName="/focaccia.jpg"
            price={12.99}
          />
          <Pizza
            name="Pizza Funghi"
            ingredients="Mozarella, funghi, spinach and ricotta cheese"
            photoName="/funghi.jpg"
            price={12.99}
          />
          <Pizza
            name="Pizza Margerita"
            ingredients="Tomato, mozarella and ricotta cheese"
            photoName="/margherita.jpg"
            price={12.99}
          /> */}
        </ul>
      </>
    </main>
  );
}
