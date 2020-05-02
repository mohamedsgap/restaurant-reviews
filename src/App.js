import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import data from "./utils/restaurantsInfo.json";
import RestaurantsMap from "./components/RestaurantsMap";
import RestaurantsList from "./components/RestaurantsList";

const CLIENT_ID = "SSC5IB0OXGTUVE2BZFOOXQKVDXSSYOKDVVHL4QZPLHB5UQKD";
const CLIENT_SECRET = "DLWMODCEGNV0VXRDGR010N5F1WBWPNNTNIBH0S0PFG4Q4N2H";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const END_POINT = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      v: "20180323",
      ll: "30.82253, 30.81908",
      near: "Tanta",
      query: "food"
    };
    axios
      .get(END_POINT + new URLSearchParams(params))
      .then(res => {
        setPlaces(res.data.response.groups[0].items);
      })
      .catch(err => {
        console.log("ERROR HAS OCURED" + err);
      });
  }, []);
  console.log(places);
  return (
    <div className="App">
      <Header />
      <div className="Restaurants">
        <RestaurantsMap data={data} places={places} />
        <RestaurantsList data={data} />
      </div>
    </div>
  );
}

export default App;
