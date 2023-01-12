import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";

export const CourseMap = ({ userLocation }) => {
  const defaultZoom = 12;
  const [testCoord, setTestCoord] = useState({
    center: {
      lat: 29.293127,
      lng: -94.878584,
    },
    zoom: 12,
  });

  const centerMyLocation = () => {
    const lat = userLocation.lat;
    const lng = userLocation.lng;
    setTestCoord({
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: 12,
    });
  };

  const mapChange = ({ center, zoom }) => {
    setTestCoord({ center: center, zoom: zoom });
  };

  return (
    <div style={{ width: "45%", height: "75vh", marginTop: 40 }}>
      <GoogleMapReact
        className="react-map"
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: 29.293127, lng: -94.878584 }}
        defaultZoom={defaultZoom}
        center={testCoord.center}
        zoom={testCoord.zoom}
        userLocation={userLocation}
        onChange={mapChange}
      >
        {/* Update to loop through all possible location markers on the map. */}
        <LocationMarker lat={userLocation?.lat} lng={userLocation?.lng} />
      </GoogleMapReact>
      <button onClick={centerMyLocation}>My Location</button>
    </div>
  );
};
