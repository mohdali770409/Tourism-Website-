import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./Components/Tours";

const App = () => {
  const [tours, setTour] = useState(data);
  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="btn-white" onClick={() => setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
