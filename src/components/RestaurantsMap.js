import React, { useState } from "react";
import MapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "../utils/MAPBOX_TOKEN";
import "mapbox-gl/dist/mapbox-gl.css";
import "./RestaurantsMap.css";
import user_position_marker from "../images/user-position-marker.png";
import restaurant_position_marker from "../images/restaurant-position-marker.png";

const TOKEN = MAPBOX_TOKEN;

function RestaurantsMap(props) {
  const restaurantsData = props.data;

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 880,
    latitude: 30.82253,
    longitude: 30.81908,
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
        <Marker latitude={30.82253} longitude={30.81908}>
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
              <h3>{selectedRestaurant.restaurantName}</h3>
              <p>This so cool restaurant number: {selectedRestaurant.id}</p>
              <img className="restaurant-image" src={selectedRestaurant.image} alt="restaurant-pic"/>
            </div>
          </Popup>
        ) : null}
      </MapGL>
    </div>
  );
}

export default RestaurantsMap;

/*
// GeoLocator component 
 <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
  />

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
  }
*/
