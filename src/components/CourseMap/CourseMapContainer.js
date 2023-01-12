import React, { useState, useEffect } from "react";
import { CourseMap } from "./CourseMap";

export const CourseMapContainer = () => {
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        localStorage.setItem(
          "userLocation",
          JSON.stringify({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        );
      });
    }
  }, []);

  return <CourseMap userLocation={userLocation} />;
};
