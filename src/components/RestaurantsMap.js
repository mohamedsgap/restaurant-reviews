import React, { useState } from 'react'
import MapGL, { GeolocateControl } from 'react-map-gl'
import { MAPBOX_TOKEN } from "../utils/MAPBOX_TOKEN";
import 'mapbox-gl/dist/mapbox-gl.css'
import './RestaurantsMap.css'

const TOKEN = MAPBOX_TOKEN

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
  }

function RestaurantsMap() {
    const [viewport, setViewPort] = useState({
        width: "100%",
        height: 880,
        latitude: 0,
        longitude: 0,
        zoom: 2
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
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />    
        </MapGL>
        </div>
    )
}

export default RestaurantsMap
