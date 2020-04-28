import React, { useState } from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import MapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "../utils/MAPBOX_TOKEN";
import "mapbox-gl/dist/mapbox-gl.css";
import "./RestaurantsMap.css";
import ExtraRestaurants from './ExtraRestaurants'
import user_position_marker from "../images/user-position-marker.png";
import restaurant_position_marker from "../images/restaurant-position-marker.png";

const TOKEN = MAPBOX_TOKEN;

function RestaurantsMap(props) {
  const restaurantsData = props.data;

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 880,
    latitude: 30.7970511,
    longitude: 30.9987288,
    zoom: 16
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div className="map">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <Marker latitude={30.7970511} longitude={30.9987288}>
          <button className="marker">
            <img src={user_position_marker} alt="user-position-marker" />
          </button>
        </Marker>

        {restaurantsData.map(restaurant => (
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
              <img
                src={restaurant_position_marker}
                alt="user-position-marker"
              />
            </button>
          </Marker>
        ))}

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
            <div>
              <h3 className="restaurant-title">{selectedRestaurant.restaurantName}</h3>
              {selectedRestaurant.ratings.map(rate => (
                <ul key={Math.random()*100}>
                <li>Feedback: {rate.comment}</li>
                <li> <Rater rating={rate.stars} total={5} interactive={false} /> </li>
                </ul>
              ))}
              <img className="restaurant-image" src={selectedRestaurant.image} alt="restaurant-pic"/>
            </div>
          </Popup>
        ) : null}
        <ExtraRestaurants />
      </MapGL>
    </div>
  );
}

export default RestaurantsMap;

