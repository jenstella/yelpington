//imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//NavBar is essentially my "homepage" with list of restaurants and map showing zoomed out.

function NavBar(props) {
  //setting each restaurant
  const [rest, setRest] = useState([]);

  //fetches in the list of restaurants from the api, converts into usable data "restList"
  //keeps map zoomed out, centered at downtown burlington still.
  useEffect(() => {
    if (rest.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
          setRest(restList);
          props.setZoom({
            zoomIn: false,
            zoom: 13,
            center: [44.4759, -73.2121],
          });
        });
    }
  });

  //return draws in list of restaurants, as links to their page by mapping in each from the restaurant list
  //styled to get rid of the 'link' look on each restaurant name
  return (
    <div id="nav">
      <ul>
        <div>
          <h2>Places to Eat</h2>
          {rest.length !== 0
            ? rest.map((id, index) => {
                console.log(id);
                return (
                  <h3 className="rest-link" key={index}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/restaurant/${id}`}
                    >
                      {id.replaceAll("-", " ")}
                    </Link>
                  </h3>
                );
              })
            : null}
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
