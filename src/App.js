import React, { useEffect } from "react";
import Rotation from "./components/Rotation";
import LocationModal from "./components/LocationModal";
import { Display } from "./Display";

export default function App() {
  useEffect(() => {
    fetch("./countryinfo/data.json")
      .then((res) => res.json())
      .then((result) => {
        this.locations = result;
      });
  }, []);

  return (
    <div>
      <LocationModal />
      <Rotation />
    </div>
  );
}
