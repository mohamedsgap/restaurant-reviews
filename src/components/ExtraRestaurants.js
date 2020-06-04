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

/*

// to access: venue.location.lat/lng
//const endPoint = 'https://api.foursquare.com/v2/venues/explore'
// old api keys
const CLIENT_ID = 'CDQOSZY5CJHZS40WUJBMVMRONYYQKFRRSCGXGUDBGEZO0VAK'
const CLIENT_SECRET = 'H1Q10JL14ZFLJGONGPOQHPV03AFKRZZHNU3QRF3MUKE1OOL2'
// new api keys
const CLIENT_ID = "SSC5IB0OXGTUVE2BZFOOXQKVDXSSYOKDVVHL4QZPLHB5UQKD";
const CLIENT_SECRET = "DLWMODCEGNV0VXRDGR010N5F1WBWPNNTNIBH0S0PFG4Q4N2H";

 const END_POINT = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      v: "20180323",
      ll: "30.82253, 30.81908",
      near: "Tanta",
      query: "food"
    };
    axios
      .get(END_POINT + new URLSearchParams(params))
      .then(res => {
        //console.log(res.data.response.groups[0].items)
        setPlaces(res.data.response.groups[0].items);
      })
      .catch(err => {
        console.log("ERROR HAS OCURED" + err);
      });
*/
