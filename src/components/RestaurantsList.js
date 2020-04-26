import React from "react";
import "./RestaurantsList.css";
import RestaurantBox from './RestaurantBox'

function RestaurantsList(props) {
  const restaurantsData = props.data;

  return (
    <div className="list">
      <h2>
        <span role="img" aria-label="food emoji">
          🥞🍛
        </span>{" "}
        Restaurants List{" "}
        <span role="img" aria-label="food emoji">
          🍝🍲
        </span>
      </h2>
     <RestaurantBox data={restaurantsData}/>
    </div>
  );
}

export default RestaurantsList;
