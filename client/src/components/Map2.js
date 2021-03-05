import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";
import {MapContainer, Marker, TileLayer} from 'react-leaflet'


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
function Map2(props) {
  const [mapInfo, setMapInfo] = useState({
    latitude: "",
    longitude: "",
  });
  console.log(props);
  return (
    <div id="map-container">
      <MapContainer
        className="map"
        center={[mapInfo.latitude, mapInfo.longitude]}
        zoom={17}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "600px"}}
      >
        <Marker position={[mapInfo.latitude, mapInfo.longitude]} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
      </MapContainer>
    </div>
  );
}
export default Map2;
