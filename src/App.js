import './App.css';
//import React, { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./View/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to country information lookup
        </p>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>

      </header>
    </div>
  );
}

export default App;
