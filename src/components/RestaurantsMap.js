import React, { useEffect, useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import MapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "../utils/MAPBOX_TOKEN";
import "mapbox-gl/dist/mapbox-gl.css";
import "./RestaurantsMap.css";
import ExtraRestaurants from "./ExtraRestaurants";
import user_position_marker from "../images/user-position-marker.png";

const TOKEN = MAPBOX_TOKEN;

function RestaurantsMap(props) {
  const [userLat, setUserLat] = useState(30.7970511);
  const [userLong, setUserLong] = useState(30.9987288);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 880,
    latitude: userLat,
    longitude: userLong,
    zoom: 10,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLat(position.coords.latitude);
        setUserLong(position.coords.longitude);
        setViewPort({
          width: "100%",
          height: 880,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 13,
        });
      });
    }
  }, []);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const _onViewportChange = (viewport) => {
    setViewPort({
      ...viewport,
      transitionDuration: 3000,
    });
  };

  console.log("restMap" + userLong + userLat);
  return (
    <div className="map">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
        onDblClick={props._handleClick}
      >
        <Marker latitude={userLat} longitude={userLong}>
          <button
            className="marker"
            onClick={(e) => {
              e.preventDefault();
              setSelectedLocation("Your current location!");
            }}
          >
            <img src={user_position_marker} alt="user-position-marker" />
          </button>
        </Marker>

        <div className="navigation-control">
          <NavigationControl />
        </div>

        {selectedLocation ? (
          <Popup
            latitude={userLat}
            longitude={userLong}
            onClose={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              <h3 className="restaurant-title">{selectedLocation}</h3>
            </div>
          </Popup>
        ) : null}

        <ExtraRestaurants places={props.places} />
      </MapGL>
    </div>
  );
}

export default RestaurantsMap;

//////// old one ///////////////////
/*
import React, { useState } from "react";
import Rater from "react-rater";
import InteractiveMap, { Marker, Popup } from "react-map-gl";
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
    zoom: 14
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedNewRestaurant, setSelectedNewRestaurant] = useState(null);

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

  const userMarkers = props.userNewPlaces.map(place => (
    <Marker
      key={place.id}
      latitude={place.location[1]}
      longitude={place.location[0]}
    >
      <button
        className="marker"
        onClick={e => {
          e.preventDefault();
          setSelectedNewRestaurant(place);
        }}
      >
        <img
          src={restaurant_position_marker}
          alt="restaurant-position-marker"
        />
      </button>
    </Marker>
  ));

  const userFilteredMarkers = props.userNewPlaces
    .filter(
      restaurant =>
        (restaurant.review >= props.fromStars) &
        (restaurant.review <= props.toStars)
    )
    .map(filteredRestaurant => (
      <Marker
        key={filteredRestaurant.id}
        latitude={filteredRestaurant.location[1]}
        longitude={filteredRestaurant.location[0]}
      >
        <button
          className="marker"
          onClick={e => {
            e.preventDefault();
            setSelectedNewRestaurant(filteredRestaurant);
          }}
        >
          <img src={restaurant_position_marker} alt="rest-position-marker" />
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
        onDblClick={props._handleClick}
      >
        <Marker latitude={30.7970511} longitude={30.9987288}>
          <button className="marker">
            <img src={user_position_marker} alt="user-position-marker" />
          </button>
        </Marker>

        {(props.fromStars === 0) & (props.toStars === 0)
          ? allMarkers
          : filteredMarkers}

        {(props.fromStars === 0) & (props.toStars === 0)
          ? userMarkers
          : userFilteredMarkers}

        {selectedNewRestaurant ? (
          <Popup
            latitude={selectedNewRestaurant.location[1]}
            longitude={selectedNewRestaurant.location[0]}
            onClose={() => {
              setSelectedNewRestaurant(null);
            }}
          >
            <div className="popup-card">
              <h3 className="rest-name">{selectedNewRestaurant.name}</h3>
              <p className="rest-rate">
                Rating:{" "}
                <Rater
                  rating={Number(selectedNewRestaurant.review)}
                  total={5}
                  interactive={false}
                />{" "}
              </p>
              <img
                className="restaurant-image"
                src={selectedNewRestaurant.img}
                alt="restaurant-pic"
              />
            </div>
          </Popup>
        ) : null}

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
                Rating:{" "}
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
*/
