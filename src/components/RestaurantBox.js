import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./RestaurantBox.css";
import AddReviews from "./AddReviews";
import RestaurantImage from "./RestaurantImage";

function RestaurantBox(props) {
  const boxData = props.data;
  const boxGplaces = props.gplaces;
  const [fromStars, setFromStars] = useState(0);
  const [toStars, setToStars] = useState(0);

  const restaurantBoxGplaces = boxGplaces.map(restaurant => {
    return (
      <div key={restaurant.id} className="section">
        <h3 className="restaurant-title">{restaurant.name}</h3>
        <div className="rest-box">
          {/* <img className="box-image" src={restImg} alt="restaurant-pic" />*/}
          {/*console.log(restaurant.photos[0].photo_reference)*/}
          <RestaurantImage imageRef={restaurant.photos[0].photo_reference} />
          <div className="rate-section">
            <ul>
              <li>
                {" "}
                <Rater
                  rating={restaurant.rating}
                  total={5}
                  interactive={false}
                />{" "}
              </li>
              <li>User Reatings Total: {restaurant.user_ratings_total}</li>
            </ul>
          </div>
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
            <ul>
              <li>
                {" "}
                <Rater
                  rating={restaurant.ratings}
                  total={5}
                  interactive={false}
                />{" "}
              </li>
              <li>Feedback: {restaurant.feedback}</li>
            </ul>
          </div>
        </div>
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    );
  });

  const getFromStars = event => {
    setFromStars(Number(event.target.value));
  };

  const getToStars = event => {
    setToStars(Number(event.target.value));
  };

  const filteredRestaurants = boxData
    .filter(
      restaurant =>
        (restaurant.ratings >= fromStars) & (restaurant.ratings <= toStars)
    )
    .map(filteredRestaurant => (
      <div key={filteredRestaurant.id} className="section">
        <h3 className="restaurant-title">
          {filteredRestaurant.restaurantName}
        </h3>
        <div className="rest-box">
          <img
            className="box-image"
            src={filteredRestaurant.image}
            alt="restaurant-pic"
          />

          <div className="rate-section">
            <ul>
              <li>
                {" "}
                <Rater
                  rating={filteredRestaurant.ratings}
                  total={5}
                  interactive={false}
                />{" "}
              </li>
              <li>Feedback: {filteredRestaurant.feedback}</li>
            </ul>
          </div>
        </div>
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    ));

  const filteredGrestaurants = boxGplaces
    .filter(
      restaurant =>
        (restaurant.ratings >= fromStars) & (restaurant.ratings <= toStars)
    )
    .map(filteredGrestaurant => (
      <div key={filteredGrestaurant.id} className="section">
        <h3 className="restaurant-title">{filteredGrestaurant.name}</h3>
        <div className="rest-box">
          <RestaurantImage
            imageRef={filteredGrestaurant.photos[0].photo_reference}
          />

          <div className="rate-section">
            <ul>
              <li>
                {" "}
                <Rater
                  rating={filteredGrestaurant.rating}
                  total={5}
                  interactive={false}
                />{" "}
              </li>
              <li>
                User Ratings Total: {filteredGrestaurant.user_ratings_total}
              </li>
            </ul>
          </div>
        </div>
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    ));

  return (
    <React.Fragment>
      <div className="filter-restaurants">
        <label className="filter-label">Filter </label>
        <select
          className="select-stars"
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
        <select className="select-stars" value={toStars} onChange={getToStars}>
          <option value="0">To</option>
          <option value="1">⭐✰✰✰✰</option>
          <option value="2">⭐⭐✰✰✰</option>
          <option value="3">⭐⭐⭐✰✰</option>
          <option value="4">⭐⭐⭐⭐✰</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="sublist">
        <div>
          {(fromStars === 0) & (toStars === 0)
            ? restaurantBoxData
            : filteredRestaurants}
        </div>
        <div>
          {(fromStars === 0) & (toStars === 0)
            ? restaurantBoxGplaces
            : filteredGrestaurants}
        </div>

        {/* <div>{restaurantBoxPlaces}</div>*/}
      </div>
    </React.Fragment>
  );
}
export default RestaurantBox;

/*
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

*/
