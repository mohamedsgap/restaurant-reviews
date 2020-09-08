import React, { useState, useEffect } from "react";
import Restaurants from "./components/Restaurants";
import Header from "./components/Header";
import axios from "axios";

import "./App.css";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function App() {
  const [places, setPlaces] = useState([]);

  // Automatically detect user geolocation
  //  Forursquare API call for Places in user's area!
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const END_POINT = "https://api.foursquare.com/v2/venues/explore?";
        const params = {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          v: "20200908",
          ll: `${position.coords.latitude}, ${position.coords.longitude}`,
          limit: 50,
          query: "restaurant",
        };
        axios
          .get(END_POINT + new URLSearchParams(params))
          .then((res) => {
            setPlaces(res.data.response.groups[0].items);
          })
          .catch((err) => {
            console.log("ERROR HAS OCURED" + err);
          });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(places);
  return (
    <div className="App">
      <Header />
      <div>
        <Restaurants places={places} />
      </div>
    </div>
  );
}

export default App;
