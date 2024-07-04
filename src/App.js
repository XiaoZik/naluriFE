import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import sunGif from "./assets/sun-unscreen.gif";
import Group6 from "./assets/Group6.png";

function App() {
  const [pi, setPi] = useState("");
  const [iteration, setIteration] = useState("");
  const [sunCircumference, setSunCircumference] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/pi/1`)
      .then((response) => {
        const data = response.data;
        setPi(data.pi);
        setIteration(data.iteration);
        setSunCircumference(data.sunCircumference);
        setAccuracy(data.accuracyValue);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mainBody">
      <div className="content">
        {loading ? (
          <img className="img1" src={sunGif} alt="test"></img>
        ) : (
          <>
            <p>
              Pi = <br />
              {pi}
            </p>
            <p>
              Iteration = <br /> {iteration}{" "}
            </p>
            <img src=""></img>
            <p>
              Accuracy = <br /> {accuracy} d.p
            </p>
            <p>
              Sun Circumference = <br /> {sunCircumference} km
            </p>
            <img className="img2" src={Group6} alt="spaceman"></img>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
