import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import data from "./utils/restaurantsInfo.json";
import FilterRestaurants from "./components/FilterRestaurants";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const GKEY_ID = process.env.REACT_APP_HELPER_KEY;

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

function App() {
  const [places, setPlaces] = useState([]);
  const [gplaces, setGplaces] = useState([]);

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

  //  API call for G_Places
  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.7970511,30.9987288&radius=7000&type=restaurant&keyword=cruise&key=${GKEY_ID}`
      )
      .then(res => {
        setGplaces(res.data.results);
      })
      .catch(err => {
        console.log("ERROR HAS OCURED" + err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <FilterRestaurants data={data} places={places} gplaces={gplaces} />
      </div>
    </div>
  );
}

export default App;
