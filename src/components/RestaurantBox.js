import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./RestaurantBox.css";

function RestaurantBox(data) {
  const boxData = data.data;

  const restaurantBoxData = boxData.map(restaurant => {
    return (
      <div key={restaurant.id} className="section">
        <h3 className="restaurant-title">{restaurant.restaurantName}</h3>
        <div className="rest-box">
          <img
            className="box-image"
            src={restaurant.image}
            alt="restaurant-pic"
          />
          <div className="rate-section">
            {restaurant.ratings.map(restRate => {
              return (
                <ul key={Math.random() * 100}>
                  <li>
                    {" "}
                    <Rater
                      rating={restRate.stars}
                      total={5}
                      interactive={false}
                    />{" "}
                  </li>
                  <li>Feedback: {restRate.comment}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return <div className="sublist">{restaurantBoxData}</div>;
}

export default RestaurantBox;
