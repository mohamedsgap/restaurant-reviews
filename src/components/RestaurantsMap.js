import React, { useState } from "react";
import Rater from "react-rater";
import InteractiveMap, { Marker, NavigationControl, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "../utils/MAPBOX_TOKEN";
import "mapbox-gl/dist/mapbox-gl.css";
import "./RestaurantsMap.css";
import ExtraRestaurants from "./ExtraRestaurants";
import user_position_marker from "../images/user-position-marker.png";
import restaurant_position_marker from "../images/restaurant-position-marker.png";

const TOKEN = MAPBOX_TOKEN;

function RestaurantsMap(props) {
  const restaurantsData = props.data;

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 830,
    latitude: 30.7970511,
    longitude: 30.9987288,
    zoom: 13
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const _onViewportChange = viewport => {
    setViewPort({ ...viewport, transitionDuration: 3000 });
  };

  const allMarkers = restaurantsData.map(restaurant => (
    <Marker
      key={restaurant.id}
      latitude={restaurant.lat}
      longitude={restaurant.long}
    >
      <button
        className="marker"
        onClick={e => {
          e.preventDefault();
          setSelectedRestaurant(restaurant);
        }}
      >
        <img src={restaurant_position_marker} alt="user-position-marker" />
      </button>
    </Marker>
  ));

  const filteredMarkers = restaurantsData
    .filter(
      restaurant =>
        (restaurant.ratings >= props.fromStars) &
        (restaurant.ratings <= props.toStars)
    )
    .map(filteredRestaurant => (
      <Marker
        key={filteredRestaurant.id}
        latitude={filteredRestaurant.lat}
        longitude={filteredRestaurant.long}
      >
        <button
          className="marker"
          onClick={e => {
            e.preventDefault();
            setSelectedRestaurant(filteredRestaurant);
          }}
        >
          <img src={restaurant_position_marker} alt="user-position-marker" />
        </button>
      </Marker>
    ));

  return (
    <div className="map">
      <InteractiveMap
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
        dragPan={false}
        doubleClickZoom={false}
      >
        <Marker latitude={30.7970511} longitude={30.9987288}>
          <button className="marker">
            <img src={user_position_marker} alt="user-position-marker" />
          </button>
        </Marker>

        {(props.fromStars === 0) & (props.toStars === 0)
          ? allMarkers
          : filteredMarkers}

        <div className="navigation-control">
          <NavigationControl />
        </div>

        {selectedRestaurant ? (
          <Popup
            latitude={selectedRestaurant.lat}
            longitude={selectedRestaurant.long}
            onClose={() => {
              setSelectedRestaurant(null);
            }}
          >
            <div className="popup-card">
              <h3 className="rest-name">{selectedRestaurant.restaurantName}</h3>
              <p className="rest-rate">
                Review:{" "}
                <Rater
                  rating={selectedRestaurant.ratings}
                  total={5}
                  interactive={false}
                />{" "}
              </p>
              <img
                className="restaurant-image"
                src={selectedRestaurant.image}
                alt="restaurant-pic"
              />
            </div>
          </Popup>
        ) : null}
        <ExtraRestaurants
          gplaces={props.gplaces}
          fromStars={props.fromStars}
          toStars={props.toStars}
        />
      </InteractiveMap>
    </div>
  );
}

export default RestaurantsMap;
