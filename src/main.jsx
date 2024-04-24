import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" flex justify-center ml-0 pb-10 pt-5 p-10 ">
      <div>
        <Navbar />
        <App />
      </div>
    </div>
  </React.StrictMode>
);
