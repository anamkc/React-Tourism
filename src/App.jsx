import { useState } from "react";
import "./App.css";
import "./index.css";
import Hello from "./components/Hello";
import Underline from "./components/Underline";
import Destination from "./components/Destination";
import React from "react";
import tours from "./data";

const App = () => {
  const [data, setData] = useState(tours);
  const removeTour = (id) => setData(data.filter(tour => tour.id !== id));

  return (
    <div>
      <div className="main">
        <Hello />
        <Underline />
      </div>
      <div className="container">
        <Destination data={data} removeTour={removeTour} />
      </div>
    </div>
  );
};
export default App;
