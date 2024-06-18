// src/components/GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 9.5939,  // Replace with your latitude
  lng: 41.8661  // Replace with your longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDOmT3IuWcOq87wl4fUXlMDotiiJE2gzYw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
