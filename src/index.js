import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="Search">
      <h1>Weather App</h1>
      <Search />
      <br></br>

      <a
        className="Github-link"
        href="https://github.com/El20-rani/weather-app-with-react.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github link
      </a>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
