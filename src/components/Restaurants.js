import React, { useState } from "react";
import RestaurantsList from "./RestaurantsList";
import RestaurantsMap from "./RestaurantsMap";
import "./FilterRestaurants.css";

const Restaurants = (props) => {
  const [userNewPlaces, setUserNewPlaces] = useState([]);

  const handleClick = (e) => {
    setUserNewPlaces((userNewPlaces) =>
      userNewPlaces.concat({
        location: e.lngLat,
        name: prompt("Enter the new restaurant name!"),
        review: prompt("give a review number form 1 to 5 "),
        img: prompt("Enter restaurant image URL!"),
        id: Math.random() * 100,
      })
    );
  };

  return (
    <React.Fragment>
      <div className="main-view">
        <div className="restaurants-map">
          <RestaurantsMap
            places={props.places}
            userNewPlaces={userNewPlaces}
            _handleClick={handleClick}
          />
        </div>
        <div className="restaurants-list">
          <RestaurantsList
            places={props.places}
            userNewPlaces={userNewPlaces}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Restaurants;
