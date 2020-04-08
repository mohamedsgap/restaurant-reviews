import React from 'react';
import './App.css';
import Header from './components/Header'
import  RestaurantsMap  from "./components/RestaurantsMap";

function App() {
  return (
    <div className="App">
        <Header />
        <RestaurantsMap />
    </div>
  );
}

export default App;
