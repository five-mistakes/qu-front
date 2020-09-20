import React from 'react';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
