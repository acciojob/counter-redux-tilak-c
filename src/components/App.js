// src/components/App.js
import React from "react";
import CounterButton from "./Counter/CounterButton";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Redux Counter App</h1>
      <CounterButton />
    </div>
  );
}

export default App;