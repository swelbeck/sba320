import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} /> */}
      </Routes>
    </div>
  );
}

export default App;
