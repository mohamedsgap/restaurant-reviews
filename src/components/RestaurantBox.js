import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./RestaurantBox.css";
import AddReviews from "./AddReviews";

function RestaurantBox(props) {
  const boxData = props.data;
  const boxPlaces = props.places;

  const restaurantBoxPlaces = boxPlaces.map(place => {
    //let imageURL = `${place.venue.categories[0].icon.prefix}${place.venue.categories[0].icon.suffix}`
    return (
      <div key={place.venue.id} className="section">
        <h3 className="restaurant-title">{place.venue.name}</h3>
        <h4>Address: {place.venue.location.address}</h4>
        <div className="rest-box">
          <img
            className="box-image"
            src={place.venue.photos.items}
            alt="restaurant-pic"
          />
        </div>
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    );
  });

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
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="filter-restaurants">
        <label  className="filter-label">Filter the restaurants</label>
        <select className="select-stars">
          <option value="0">choose the rating stars!</option>
          <option value="1">⭐✰✰✰✰</option>
          <option value="2">⭐⭐✰✰✰</option>
          <option value="3">⭐⭐⭐✰✰</option>
          <option value="4">⭐⭐⭐⭐✰</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div> 
      <div className="sublist">
        <div>{restaurantBoxData}</div>
        <div>{restaurantBoxPlaces}</div>
      </div>
    </React.Fragment>
  );
}

export default RestaurantBox;
