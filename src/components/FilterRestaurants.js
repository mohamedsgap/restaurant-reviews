import React, { useState } from "react";
import RestaurantsList from "./RestaurantsList";
import RestaurantsMap from "./RestaurantsMap";
import "./FilterRestaurants.css";
const FilterRestaurants = props => {
  const [fromStars, setFromStars] = useState(0);
  const [toStars, setToStars] = useState(0);

  const getFromStars = event => {
    setFromStars(Number(event.target.value));
  };

  const getToStars = event => {
    setToStars(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <div className="filter-feature">
        <label className="label-data">
          Filter the restaurants based on your favorite reviews stars
        </label>
        <select
          className="select-from"
          value={fromStars}
          onChange={getFromStars}
        >
          <option value="0">From</option>
          <option value="1">⭐✰✰✰✰</option>
          <option value="2">⭐⭐✰✰✰</option>
          <option value="3">⭐⭐⭐✰✰</option>
          <option value="4">⭐⭐⭐⭐✰</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <select className="select-to" value={toStars} onChange={getToStars}>
          <option value="0">To</option>
          <option value="1">⭐✰✰✰✰</option>
          <option value="2">⭐⭐✰✰✰</option>
          <option value="3">⭐⭐⭐✰✰</option>
          <option value="4">⭐⭐⭐⭐✰</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="main-view">
        <div className="restaurants-map">
          <RestaurantsMap
            data={props.data}
            gplaces={props.gplaces}
            fromStars={fromStars}
            toStars={toStars}
          />
        </div>
        <div className="restaurants-list">
          <RestaurantsList
            data={props.data}
            gplaces={props.gplaces}
            fromStars={fromStars}
            toStars={toStars}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilterRestaurants;
