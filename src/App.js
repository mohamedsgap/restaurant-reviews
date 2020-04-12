import React from 'react';
import './App.css';
import Header from './components/Header'
import data from './utils/restaurantsInfo.json'
import  RestaurantsMap  from "./components/RestaurantsMap";
import  RestaurantsList  from "./components/RestaurantsList";



function App() {
  return (
    <div className="App">
        <Header />
        <div className="Restaurants"> 
        <RestaurantsMap data={data}/>
        <RestaurantsList data={data}/>
        </div>
    </div>
  );
}

export default App;
