import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import './App.css';

// Pass any other value besides string in proprs (boolean, object, number, etc.)
// it needs to be wrapped in {}
function App() {
  return (
    <div>
      <Navbar/>
      <Greeter name="Karen" age="62" excitement={4}/>
      <Greeter name="Bob" age="27" excitement={2}/>
      <h1>Hello from app</h1>
    </div>
  );
}

export default App;
