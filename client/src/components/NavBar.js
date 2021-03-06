import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [rest, setRest] = useState([]);

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
