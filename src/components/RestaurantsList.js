import React from "react";
import "./RestaurantsList.css";
import RestaurantBox from "./RestaurantBox";

function RestaurantsList(props) {
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
      <RestaurantBox
        places={props.places}
        userNewPlaces={props.userNewPlaces}
      />
    </div>
  );
}

export default RestaurantsList;
