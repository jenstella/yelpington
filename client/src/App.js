import './App.css';
import Map from './components/Map'
import Restaurant from './Rest'
import Sidebar from './components/Sidebar'
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
        {/* browser router can also go into index.js */}
        <Switch>
          <Route exact path="/api/:id" component={} />
          <Route path="/api/american-flatbread" component={About} />
          <Route path="/:article" component={Article} />
          <Route path="/author" component={Author} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


// the below will help me with how I am supposed to do above
{/* <Route
          path="/article/:title"
          render={(props) => {
            return props.match.isExact ? (
              <Posts match={props.match} />
            ) : (
              <Redirect to="/" />
            );
          }}
        /> */}

export default App;
