// components/GoogleMapComponent.js
import React, { useEffect, useRef } from 'react';
import useGoogleMaps from './useGoogleMaps';

const mapStyles = {
  width: '37rem',
  height: '10rem'
};

const defaultCenter = {
  lat: 40.748817,
  lng: -73.985428 
};

const AppGoogleMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const isLoaded = useGoogleMaps('AIzaSyBBILEr28gGiV7o6k7w0YBoNUXasm9ZRM0');
  useEffect(() => {
    if (isLoaded && mapRef.current && !mapInstanceRef.current) {
      if (window.google) {
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
          center: defaultCenter,
          zoom: 13,
        });
      }
    }
  }, [isLoaded]);

  return <div ref={mapRef} style={mapStyles} />;
};

export default AppGoogleMap;
