import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Greeter name="Karen" age="62"/>
      <Greeter name="Bob" age="27"/>
      <h1>Hello from app</h1>
    </div>
  );
}

export default App;
