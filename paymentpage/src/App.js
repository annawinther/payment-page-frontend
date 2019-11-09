import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import './App.css';
// import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Login></Login>
        <Signup></Signup>
        {/* <Counter></Counter> */}
      </header>
    </div>
  );
}

export default App;
