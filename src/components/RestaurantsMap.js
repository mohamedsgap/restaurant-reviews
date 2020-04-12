import React, { useState } from 'react'
import MapGL, {Marker} from 'react-map-gl'
import { MAPBOX_TOKEN } from "../utils/MAPBOX_TOKEN";
import 'mapbox-gl/dist/mapbox-gl.css'
import './RestaurantsMap.css'
import user_position_marker from '../images/user-position-marker.png'
import restaurant_position_marker from '../images/restaurant-position-marker.png'

const TOKEN = MAPBOX_TOKEN

function RestaurantsMap(props) {
  const restaurantsData = props.data;
  
    const [viewport, setViewPort] = useState({
        width: "100%",
        height: 880,
        latitude: 30.822530,
        longitude: 30.819080,
        zoom: 15
    })

    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

    return (
        <div className="map">  
        <MapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/dark-v8"
          onViewportChange={_onViewportChange}
        >
        <Marker
        latitude={30.822530}
        longitude={30.819080}
        >
          <button className="marker">
            <img src={user_position_marker} alt="user-position-marker" />
          </button>
        </Marker>
        {
         restaurantsData.map(restaurant =>  (
          <Marker
          key={restaurant.id}
          latitude={restaurant.lat}
          longitude={restaurant.long}
          >
            <button className="marker">
              <img src={restaurant_position_marker} alt="user-position-marker" />
            </button>
            </Marker>
          )) 
        }  
      </MapGL>
      </div>
    )
}

export default RestaurantsMap

/*

// GeoLocator component 
 <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
  />

*/

/*
const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
  }
*/