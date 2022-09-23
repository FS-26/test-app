import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Welcome from "./components/welcome.jsx";
import Bye from "./components/bye.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Welcome nom="Ibn Abbad" prenom="Sara" />
      <Welcome nom="Fennir" prenom="Adnane" />
      <Bye />
    </div>
  </React.StrictMode>
);
