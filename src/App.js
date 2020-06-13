import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import data from "./utils/restaurantsInfo.json";
import FilterRestaurants from "./components/FilterRestaurants";

/*
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
*/
const GKEY_ID = process.env.REACT_APP_HELPER_KEY;

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

function App() {
  const [gplaces, setGplaces] = useState([]);

  //  API call for G_Places
  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.7970511,30.9987288&radius=1500&type=restaurant&keyword=cruise&key=${GKEY_ID}`
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
        <FilterRestaurants data={data} gplaces={gplaces} />
      </div>
    </div>
  );
}

export default App;
