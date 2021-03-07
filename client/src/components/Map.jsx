//imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import Zoom from "./Zoom";
import { Link } from "react-router-dom";

//center starts initially set to center of Burlington
function Map(props) {
  const [center, setCenter] = useState([44.4759, -73.2121]);

  //map set up
  //center of map start at center of BTV. zoom starts at 12.
  return (
    <div id="map-container">
      <MapContainer
        center={props.center}
        zoom={12}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        zoomControl={true}
        touchZoom={true}
        style={{ height: "400px", width: "600px" }}
      >
        {/* different map brought in */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        {/* sets new zoom, and new center */}
        <Zoom center={props.newCenter} zoom={props.newZoom} />
        {/* markers and popups with clickable links for each restaurant */}
        <Marker position={[44.478165, -73.213417]}>
          <Popup>
            <Link to={`/restaurant/a-single-pebble`}>A Single Pebble</Link>
          </Popup>
        </Marker>
        <Marker position={[44.47647, -73.21429]}>
          <Popup>
            <Link to={`/restaurant/american-flatbread`}>
              American Flatbread
            </Link>
          </Popup>
        </Marker>
        <Marker position={[44.47812, -73.21201]}>
          <Popup>
            <Link to={`/restaurant/el-cortijo`}>El Cortijo</Link>
          </Popup>
        </Marker>
        <Marker position={[44.479114, -73.216145]}>
          <Popup>
            <Link to={`/restaurant/hen-of-the-wood`}>Hen of the Wood</Link>
          </Popup>
        </Marker>
        <Marker position={[44.476131, -73.212387]}>
          <Popup>
            <Link to={`/restaurant/honey-road`}>Honey Road</Link>
          </Popup>
        </Marker>
        <Marker position={[44.48946, -73.206039]}>
          <Popup>
            <Link to={`/restaurant/pho-hong`}>Pho Hong</Link>
          </Popup>
        </Marker>
        <Marker position={[44.489574, -73.207291]}>
          <Popup>
            <Link to={`/restaurant/pizzeria-ida`}>Pizzeria Ida</Link>
          </Popup>
        </Marker>
        <Marker position={[44.477903, -73.211634]}>
          <Popup>
            <Link to={`/restaurant/revolution-kitchen`}>
              Revolution Kitchen
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
