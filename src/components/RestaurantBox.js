import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./RestaurantBox.css";
import AddReviews from "./AddReviews";
import RestaurantImage from "./RestaurantImage";

function RestaurantBox(props) {
  const boxData = props.data;
  const boxGplaces = props.gplaces;

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

  const filteredRestaurants = boxData
    .filter(
      restaurant =>
        (restaurant.ratings >= props.fromStars) &
        (restaurant.ratings <= props.toStars)
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
        (restaurant.rating >= props.fromStars) &
        (restaurant.rating <= props.toStars)
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
  const userNewPlaces = props.userNewPlaces.map(restaurant => {
    return (
      <div key={restaurant.id} className="section">
        <h3 className="restaurant-title">{restaurant.name}</h3>
        <div className="rest-box">
          <img
            className="box-image"
            src={restaurant.img}
            alt="restaurant-pic"
          />

          <div className="rate-section">
            <ul>
              <li>
                {" "}
                <Rater
                  rating={restaurant.review}
                  total={5}
                  interactive={false}
                />{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    );
  });

  const userNewFilteredPlaces = props.userNewPlaces
    .filter(
      restaurant =>
        (restaurant.review >= props.fromStars) &
        (restaurant.review <= props.toStars)
    )
    .map(filteredRestaurant => (
      <div key={filteredRestaurant.id} className="section">
        <h3 className="restaurant-title">{filteredRestaurant.name}</h3>
        <div className="rest-box">
          <img
            className="box-image"
            src={filteredRestaurant.img}
            alt="restaurant-pic"
          />

          <div className="rate-section">
            <ul>
              <li>
                {" "}
                <Rater
                  rating={filteredRestaurant.review}
                  total={5}
                  interactive={false}
                />{" "}
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
      <div className="sublist">
        <div>
          {(props.fromStars === 0) & (props.toStars === 0)
            ? restaurantBoxData
            : filteredRestaurants}
        </div>
        <div>
          {(props.fromStars === 0) & (props.toStars === 0)
            ? restaurantBoxGplaces
            : filteredGrestaurants}
        </div>
        <div>
          {(props.fromStars === 0) & (props.toStars === 0)
            ? userNewPlaces
            : userNewFilteredPlaces}
        </div>
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
