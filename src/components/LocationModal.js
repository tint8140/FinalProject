import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { Display } from "../Display";
import { animated } from "react-spring";

export default function LocationModal() {
  const [open, setOpen] = useState(false);
  //fetch the data
  const [location, setLocation] = useState({
    id: null,
    coordinates: { lat: null, long: null },
    name: null,
    continent: null,
    comment: null
  });

  useEffect(() => {
    fetch("./countryinfo/data.json")
      .then((res) => res.json())
      .then((result) => {
        this.locations = result;
      });
    Display.information(onModalChange);
  }, []);

  //display the infos
  function onModalChange() {
    setLocation(Display.modal);

    setOpen(true);
  }

  const close = () => setOpen(false);

  //animate the modal
  const AnimatedModal = animated(Modal);

  //Display each country information
  return (
    <div>
      <AnimatedModal open={open} onClose={close}>
        <Grid>
          <h2>
            {" "}
            Name:
            {location.name}
          </h2>
          <p>
            {" "}
            Continent:
            {location.continent}{" "}
          </p>
          <p>
            {" "}
            Comment:
            {location.comment}
          </p>
        </Grid>
      </AnimatedModal>
    </div>
  );
}
