import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState } from 'react'

function Map(props) {

  const [center, setCenter] = useState([44.4759, -73.2121])

  return (
    <MapContainer
      center={props.center}
      zoom={8}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      zoomControl={true}
      touchZoom={true}
      style={{ height: "400px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
     <Marker position={props.center} /> 
    </MapContainer>
  );
}

export default Map;
