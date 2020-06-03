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
        data={props.data}
        gplaces={props.gplaces}
        fromStars={props.fromStars}
        toStars={props.toStars}
      />
    </div>
  );
}

export default RestaurantsList;
