import './App.css';
import Map from './Map'
import Restaurant from './Restaurant'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import {useState} from 'react'


function App() {
  const [center, setCenter] = useState([43.88, -72.7317])
  const [zoom, setZoom] = useState(8);

  return (
    <div>
    <h1>Welcome to Yelpington!</h1>
    <Map center={center} zoom={zoom} />
    </div>
  );
}

export default App;
