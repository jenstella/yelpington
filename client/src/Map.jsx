import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState } from 'react'

function Map(props) {

  const [center, setCenter] = useState([43.88, -72.7317])

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
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
     <Marker position={props.center} /> 
    </MapContainer>
  );
}

export default Map;
