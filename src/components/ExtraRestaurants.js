import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import "./ExtraRestaurants.css";
import restaurant_marker from "../images/restaurant-position-marker.png";
import bestRestLogo from "../images/bestRestLogo.png";

function ExtraRestaurants(props) {
  const restaurantPlaces = props.places;
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div>
      {restaurantPlaces.map((place) => (
        <Marker
          key={place.venue.id}
          latitude={place.venue.location.lat}
          longitude={place.venue.location.lng}
        >
          <button
            className="marker"
            onClick={(e) => {
              e.preventDefault();
              setSelectedRestaurant(place);
            }}
          >
            <img src={restaurant_marker} alt="restaurant marker" />
          </button>
        </Marker>
      ))}
      {selectedRestaurant ? (
        <Popup
          latitude={selectedRestaurant.venue.location.lat}
          longitude={selectedRestaurant.venue.location.lng}
          onClose={() => {
            setSelectedRestaurant(null);
          }}
        >
          <div>
            <h3 className="restaurant-title">
              {selectedRestaurant.venue.name}
            </h3>
            <p>Address: {selectedRestaurant.venue.location.address}</p>
            <img
              className="restaurantLogo"
              src={bestRestLogo}
              alt="restaurnt logo"
            />
          </div>
        </Popup>
      ) : null}
    </div>
  );
}

export default ExtraRestaurants;
