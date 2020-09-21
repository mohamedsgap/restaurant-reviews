import React from "react";
import "./RestaurantsList.css";
import RestaurantBox from "./RestaurantBox";

function RestaurantsList(props) {
  return (
    <div className="list">
      <h2 className="list-title">
        <span role="img" aria-label="food emoji">
          🥞🍛
        </span>{" "}
        Restaurant Lists{" "}
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
