import React from 'react';
import './App.css';
import Header from './components/Header'
import  RestaurantsMap  from "./components/RestaurantsMap";
import  RestaurantsList  from "./components/RestaurantsList";


function App() {
  return (
    <div className="App">
        <Header />
        <RestaurantsMap />
        <RestaurantsList />
    </div>
  );
}

export default App;
