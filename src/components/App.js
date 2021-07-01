import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);
  const [terminate, setTerminate] = useState(false);

  useEffect(() => {
    !terminate &&
      setTimeout(() => {
        time > 0 && setTime(time - 1);
      }, 1000);

    terminate && setTime(0);
  }, [time]);

  const decrementCount = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (isNaN(e.target.value) || e.target.value == 0) {
        setTerminate(true);
      } else {
        setTerminate(false);
        setTime(Math.floor(e.target.value));
      }
    }
  };
  console.log("terminate", terminate);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={decrementCount} /> sec.
        </h1>
      </div>
      <div id="current-time">{terminate ? 0 : time}</div>
    </div>
  );
};

export default App;
