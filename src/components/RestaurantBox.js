import React from "react";
import "./RestaurantBox.css";
import AddReviews from "./AddReviews";
import RestaurantImage from "./RestaurantImage";
import restaurantLogo from "../images/restaurants-logo.jpg";

function RestaurantBox(props) {
  const boxPlaces = props.places;
  console.log("boxPlaces " + boxPlaces);
  const restaurantBoxPlaces = boxPlaces.map((place) => {
    //let imageURL = `${place.venue.categories[0].icon.prefix}${place.venue.categories[0].icon.suffix}`
    return (
      <div key={place.venue.id} className="section">
        <h3 className="restaurant-title">{place.venue.name}</h3>
        <h4>Address: {place.venue.location.address}</h4>
        {/*
        <div className="rest-box">
          <img
            className="box-image"
            src={restaurantLogo}
            alt="restaurant-pic"
          />
        </div>
        */}
        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="sublist">
        <div>{restaurantBoxPlaces}</div>
      </div>
    </React.Fragment>
  );
}
export default RestaurantBox;

/*
  const userNewFilteredPlaces = props.userNewPlaces
    .filter(
      (restaurant) =>
        (restaurant.review >= props.fromStars) &
        (restaurant.review <= props.toStars)
    )
    .map((filteredRestaurant) => (
      <div key={filteredRestaurant.id} className="section">
        <h3 className="restaurant-title">{filteredRestaurant.name}</h3>
        <div className="box-image">
          <img src={filteredRestaurant.img} alt="restaurant-pic" />
        </div>
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

        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    ));
    */

/*
  const boxGplaces = props.gplaces;
  const restaurantBoxGplaces = boxGplaces.map(restaurant => {
    return (
      <div key={restaurant.id} className="section">
        <h3 className="restaurant-title">{restaurant.venue.name}</h3>
        <div className="rest-box">
          <div className="box-image">
            <RestaurantImage imageRef={restaurant.photos[0].photo_reference} />
          </div>
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
 */

/*

  const filteredRestaurants = boxPlaces
    .filter(
      (restaurant) =>
        (restaurant.rating >= props.fromStars) &
        (restaurant.rating <= props.toStars)
    )
    .map((filteredGrestaurant) => (
      <div key={filteredGrestaurant.id} className="section">
        <h3 className="restaurant-title">{filteredGrestaurant.name}</h3>
        <div className="box-image">
          <RestaurantImage
            imageRef={filteredGrestaurant.photos[0].photo_reference}
          />
        </div>
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

        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    ));
 */

/*
  const userNewPlaces = props.userNewPlaces.map((restaurant) => {
    return (
      <div key={restaurant.id} className="section">
        <h3 className="restaurant-title">{restaurant.name}</h3>
        <div className="box-image">
          <img src={restaurant.img} alt="restaurant-pic" />
        </div>
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

        <div className="add-reviews">
          <AddReviews />
        </div>
      </div>
    );
  });
 
 
 */
