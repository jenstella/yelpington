//imports
import React from "react";
import { useState, useEffect } from "react";

export default function Rest(props) {
  //brings in the information from the json file
  const [restInfo, setRestInfo] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
    hours: "",
    latitude: "",
    longitude: "",
    notes: [],
  });

  useEffect(() => {
    //if the restaurant id is blank, OR the marker you click does not match the restaurant page it is on, bring it to that page
    if (restInfo.id === "" || restInfo.id !== props.match.params.id) {
      console.log(props.match.params.id);
      //using props, draws in the information from the api to convert to usable data to use
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restDetails) => {
          setRestInfo(restDetails);
          //once new restaurant info is set using state, zoomIn becomes true, increasing zoom and making the new center the chosen restaurant rather than downtown Burlington
          props.setNewZoom({
            zoomIn: true,
            zoom: 20,
            center: [restDetails.latitude, restDetails.longitude],
          });
        });
    }
  });

  //returns the chosen restaurant's information on the page.
  return (
    <div>
      <h2>{restInfo.name}</h2>
      <h2>{restInfo.address}</h2>
      <h2>{restInfo.phone}</h2>
      <h2>{restInfo.hours}</h2>
      <h2>{restInfo.notes}</h2>
    </div>
  );
}
