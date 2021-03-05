import './App.css';
import Map from './components/Map'
import Rest from './Rest'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import {useState} from 'react'


function App() {
  const [center, setCenter] = useState([44.4759, -73.2121])
  const [zoom, setZoom] = useState(8);

  return (
    <div id="main-div">
    <h1>Yelpington</h1>
    <div id="browser">
    <BrowserRouter>
    <NavBar />
        {/* browser router can also go into index.js */}
        <Switch>
          <Route path="/restaurant/:name" component={Rest} />
          {/* <Route path="" component={} /> */}
        </Switch>
        <Map center={center} zoom={zoom} />
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;




