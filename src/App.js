import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        setFotos(json);
      });
  }, []);

  return (
    <div className="App">
      <div className="fotos d-flex flex-wrap align-items-stretch justify-content-center">
        {fotos.map(({ id, title, thumbnailUrl }) => (
          <div key={id} className="card">
            <img
              src={thumbnailUrl}
              alt=""
              className="card-img-top img-fluid "
            />
            <div className="card-body">
              <h6 className="card-title">{title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
