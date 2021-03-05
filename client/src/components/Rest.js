import React from "react";
import { useState, useEffect } from "react";
import Map2 from "./Map2";

//use match property

export default function Rest(props) {
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
    if (restInfo.id === "") {
      console.log(props.match.params.id);
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restDetails) => {
          setRestInfo(restDetails);
        });
    }
  });

  return (
    <div>
      <h2>{restInfo.name}</h2>
      <h2>{restInfo.address}</h2>
      <h2>{restInfo.phone}</h2>
      <h2>{restInfo.hours}</h2>
      <h2>{restInfo.notes}</h2>
      <Map2
        lat={restInfo.latitude}
        long={restInfo.longitude}
        position={[props.lat, props.long]}
      />
    </div>
  );
}
