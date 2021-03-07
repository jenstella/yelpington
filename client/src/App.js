//imports
import "./App.css";
import Map from "./components/Map";
import Rest from "./components/Rest";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  //sets initial zoom and center on downtown burlington, zoomed out.
  const [center, setCenter] = useState([44.4759, -73.2121]);
  const [zoom, setZoom] = useState({
    //zoomIn is false, becomes true when restaurant is chosen, and zooms in on restaurant. default is 'false'
    zoomIn: false,
    zoom: 13,
    center: [44.4759, -73.2121],
  });

  //returns the header Yelpington, which also acts as link to go home from any page
  return (
    <div id="main-div">
      <h1>
        <a
          href="/"
          style={{ textDecoration: "none", color: "rgb(179, 159, 134)" }}
        >
          Yelpington
        </a>
      </h1>
      <div id="browser">
        <BrowserRouter>
          {/* browser router can also go into index.js; either place is fine */}
          <Switch>
            <Route
              //NavBar "homepage"
              exact
              path="/"
              render={() => {
                return <NavBar setZoom={setZoom} />;
              }}
            />
            <Route
              //goes to restaurant page, renders in the props and if the match is exact it goes to the page, sets the new zoom on the map. if not, redirects to home.
              path="/restaurant/:id"
              render={(props) => {
                return props.match.isExact ? (
                  <Rest match={props.match} setNewZoom={setZoom} />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
            {/* <Route path="" component={} /> */}
          </Switch>
          {/* map lives outside of the switch, so that it shows on every page */}
          <Map
            // newZoom and newCenter: ternaries which set to the new zoom if the restaurant page is chosen, if not, default.
            newZoom={zoom.zoomIn ? zoom.zoom : 13}
            newCenter={zoom.zoomIn ? zoom.center : [44.4759, -73.2121]}
          />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
