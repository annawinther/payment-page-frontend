import React from 'react';
import Login from './pages/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

import { Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path ="/" component={Counter} />
    </div>
  );
}

export default App;
