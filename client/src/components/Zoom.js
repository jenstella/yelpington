//import
import { useMap } from "react-leaflet";

// function to change map zoom and view!
//this allows the maps zoom to be conditional and change when restaurants are chosen.
function Zoom({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default Zoom;
