import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter'
import MoodToggler from './MoodToggler'
import Cart from './Shopping Cart/Cart'
import './App.css';

const items = [
  {id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2},
  {id: 2, name: 'Pinto Beans', price: 1.99, qty: 3},
  {id: 3, name: 'Sour Cream', price: 3.50, qty: 1}
]

// Pass any other value besides string in proprs (boolean, object, number, etc.)
// it needs to be wrapped in {}
function App() {
  return (
    <div>
      <Cart initialItems={items}/>
      <Counter step={5}/>
      <Counter/>
      <MoodToggler/>
      <Navbar/>
      <Greeter name="Karen" age="62" excitement={4}/>
      <Greeter name="Bob" age="27" excitement={2}/>
      <h1>Hello from app</h1>
    </div>
  );
}

export default App;
