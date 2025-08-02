import React, { useEffect, useRef, useState } from 'react';

const MapSelector = ({ onLocationSelect }) => {
  const mapRef = useRef(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 31.634, lng: 74.8723 }, // Amritsar default
        zoom: 14,
      });

      map.addListener('click', async (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        // Reverse geocode
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const address = results[0].formatted_address;
            onLocationSelect({ lat, lng, address });
          }
        });

        if (marker) marker.setMap(null); // remove old marker

        const newMarker = new window.google.maps.Marker({
          position: { lat, lng },
          map,
        });
        setMarker(newMarker);
      });
    };

    if (window.google) {
      initMap();
    }
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapSelector;
