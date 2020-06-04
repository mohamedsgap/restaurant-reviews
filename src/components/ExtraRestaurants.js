import React, { useState } from "react";
import Rater from "react-rater";
import { Marker, Popup } from "react-map-gl";
import "./ExtraRestaurants.css";
import restaurant_marker from "../images/restaurant-position-marker.png";
import RestaurantImage from "./RestaurantImage";

function ExtraRestaurants(props) {
  const restaurantPlaces = props.gplaces;
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const allMarkers = restaurantPlaces.map(place => (
    <Marker
      key={place.id}
      latitude={place.geometry.location.lat}
      longitude={place.geometry.location.lng}
    >
      <button
        className="marker"
        onClick={e => {
          e.preventDefault();
          setSelectedRestaurant(place);
        }}
      >
        <img src={restaurant_marker} alt="restaurant marker" />
      </button>
    </Marker>
  ));

  const filteredMarkers = restaurantPlaces
    .filter(
      restaurant =>
        (restaurant.rating >= props.fromStars) &
        (restaurant.rating <= props.toStars)
    )
    .map(filteredRestaurant => (
      <Marker
        key={filteredRestaurant.id}
        latitude={filteredRestaurant.geometry.location.lat}
        longitude={filteredRestaurant.geometry.location.lng}
      >
        <button
          className="marker"
          onClick={e => {
            e.preventDefault();
            setSelectedRestaurant(filteredRestaurant);
          }}
        >
          <img src={restaurant_marker} alt="restaurant marker" />
        </button>
      </Marker>
    ));

  return (
    <div>
      {(props.fromStars === 0) & (props.toStars === 0)
        ? allMarkers
        : filteredMarkers}

      {selectedRestaurant ? (
        <Popup
          latitude={selectedRestaurant.geometry.location.lat}
          longitude={selectedRestaurant.geometry.location.lng}
          onClose={() => {
            setSelectedRestaurant(null);
          }}
        >
          <div>
            <h3 className="restaurant-title">{selectedRestaurant.name}</h3>
            <p className="rest-rate">
              Review:{" "}
              <Rater
                rating={selectedRestaurant.rating}
                total={5}
                interactive={false}
              />{" "}
            </p>
            <div className="restaurant-image">
              <RestaurantImage
                imageRef={selectedRestaurant.photos[0].photo_reference}
              />
            </div>
          </div>
        </Popup>
      ) : null}
    </div>
  );
}

export default ExtraRestaurants;
