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
    <div>
    <h1>Welcome to Yelpington!</h1>
    <Map center={center} zoom={zoom} />
    <BrowserRouter>
    <NavBar />
        {/* browser router can also go into index.js */}
        <Switch>
          <Route path="/restaurant/:name" component={Rest} />
          {/* <Route path="" component={} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;




