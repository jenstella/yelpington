import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [rest, setRest] = useState([]);

  useEffect(() => {
    if (rest.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
          setRest(restList);
        });
    }
  });


  return (
    <div>
      <h1>Sidebar</h1>
      <ul>
        {rest.map((name, index) => {
          return (
            <h3 key={index}>
              <Link to={`/${name}`}>{name.replaceAll("-", " ")}</Link>
            </h3>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;