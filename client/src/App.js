import './App.css';
import Map from './Map'
import Restaurant from './Restaurant'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


function App() {
  return (
    <div>
    <h1>Welcome to Yelpington!</h1>
    <Map />
    </div>
  );
}

export default App;
