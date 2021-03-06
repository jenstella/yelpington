import "./App.css";
import Map from "./components/Map";
import Rest from "./components/Rest";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 13,
    center: [44.4759, -73.2121]
  })


  return (
    <div id="main-div">
      <h1>
        <a href="/" style={{ textDecoration: "none", color: 'rgb(179, 159, 134)'}}>
          Yelpington
        </a>
      </h1>
      <div id="browser">
        <BrowserRouter>
          {/* browser router can also go into index.js */}
          <Switch>
          <Route exact path="/"
          render={() => { 
            return  <NavBar setZoom={setZoom}/>
          }}
          />
            {/* <Route exact path="/">
              <NavBar />
            </Route> */}
            <Route
              path="/restaurant/:id"
              render={(props) => {
                return props.match.isExact ? (
                  <Rest match={props.match} setNewZoom={setZoom}/>
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
            {/* <Route path="" component={} /> */}
          </Switch>
          <Map newZoom={zoom.zoomIn ? zoom.zoom: 13} newCenter={zoom.zoomIn ? zoom.center: [44.4759, -73.2121]}/>
        </BrowserRouter>
      </div>
    </div>
  );
            }

export default App;
