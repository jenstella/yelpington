import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from 'react'

function Map(props) {

  const [center, setCenter] = useState([44.4759, -73.2121])

  return (
    <MapContainer
      center={props.center}
      zoom={12}
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
     <Marker position={[44.478165, -73.213417]}>
        <Popup>A Single Pebble</Popup> 
        </ Marker>
     <Marker position={[44.476470, -73.214290]}>
        <Popup>American Flatbread</Popup> 
        </ Marker>
     <Marker position={[44.478120, -73.212010]}>
        <Popup>El Coritjo</Popup> 
        </ Marker>
     <Marker position={[44.479114, -73.216145]}>
        <Popup>Hen of the Wood</Popup> 
        </ Marker>
     <Marker position={[44.476131, -73.212387]}>
        <Popup>Honey Road</Popup> 
        </ Marker>
     <Marker position={[44.48946, -73.206039]}>
        <Popup>Pho Hong</Popup> 
        </ Marker>
     <Marker position={[44.489574, -73.207291]}>
        <Popup>Pizzeria Ida</Popup> 
        </ Marker>
     <Marker position={[44.477903, -73.211634]}>
        <Popup>Revolution Kitchen</Popup>
        </ Marker>

    </MapContainer>
  );
}

export default Map;
