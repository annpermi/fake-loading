import React, { useState, useEffect } from "react";
import { LoopCircleLoading } from "react-loadingg";

import "./App.css";

function App() {
  const [src, setSrc] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setSrc(
          "https://source.unsplash.com/random/500x500?sig=incrementingIdentifier"
        );
        setLoading(false);
      }, 4000);
    }
  });

  return (
    <div className="App">
      <h1>Fake loading</h1>
      <div>
        {loading ? <LoopCircleLoading /> : <img src={src} alt="Random img" />}
      </div>
    </div>
  );
}

export default App;
