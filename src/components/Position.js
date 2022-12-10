import { Display } from "../Display";
import React, { useState, useEffect } from "react";

export default function Points() {
  //an array of location objects
  const [locations, setLocations] = useState(Display.locations);

  //subscribe to DataStore changes
  useEffect(() => {
    fetch("./countryinfo/data.json")
      .then((res) => res.json())
      .then((result) => {
        this.locations = result;
      });
    Display.information(onLocationsChange);
  }, []);

  //when DataStore modal property changes, update information
  function onLocationsChange() {
    setLocations(Display.locations);
  }

  //create a point for each object in locations array
  const positions = locations.map((location) => (
    <mesh
      key={location.id}
      position={(location.coordinates.lat, location.coordinates.long)}
      onClick={(e) => {
        Display.updateModal(location);
      }}
    >
      <sphereGeometry args={[0.02, 20, 20]} />
    </mesh>
  ));

  return <>{positions}</>;
}
