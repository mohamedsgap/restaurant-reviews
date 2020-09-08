import React, { useState, useEffect } from "react";
import Restaurants from "./components/Restaurants";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function App() {
  const [places, setPlaces] = useState([]);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLogitude] = useState(null);

  // Automatically detect user geolocation
  //  Forursquare API call for Places in user's area!
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLatitude(position.coords.latitude);
        setUserLogitude(position.coords.longitude);
        const END_POINT = "https://api.foursquare.com/v2/venues/explore?";
        const params = {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          v: "20180323",
          ll: `${position.coords.latitude}, ${position.coords.longitude}`,
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
  }, [navigator.geolocation.getCurrentPosition]);

  console.log(userLongitude, userLatitude);
  console.log(places);
  return (
    <div className="App">
      <Header />
      <div>
        <Restaurants
          places={places}
          userLatitude={userLatitude}
          userLongitude={userLongitude}
        />
      </div>
    </div>
  );
}

export default App;
