import "./App.css";
import React, { FC } from "react";

const Spinner: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    version="1.1"
    viewBox="0 0 31.75 31.75"
  >
    <g strokeWidth="0">
      <circle
        cx="15.875"
        cy="2.646"
        r="2.646"
        className="Spinner-correct-top"
      ></circle>
      <circle
        cx="25.229"
        cy="6.521"
        r="2.646"
        className="Spinner-correct-top-right"
      ></circle>
      <circle
        cx="29.104"
        cy="15.875"
        r="2.646"
        className="Spinner-correct-right"
      ></circle>
      <circle
        cx="25.229"
        cy="25.229"
        r="2.646"
        className="Spinner-correct-bottom-right"
      ></circle>
      <circle
        cx="15.875"
        cy="29.104"
        r="2.646 "
        className="Spinner-correct-bottom"
      ></circle>
      <circle
        cx="6.521"
        cy="25.229"
        r="2.646"
        className="Spinner-correct-bottom-left"
      ></circle>
      <circle
        cx="2.646"
        cy="15.875"
        r="2.646"
        className="Spinner-correct-left"
      ></circle>
      <circle
        cx="6.521"
        cy="6.521"
        r="2.646"
        className="Spinner-correct-top-left"
      ></circle>
    </g>
  </svg>
);

const SpinnerWrong: FC = () => (
  <svg
    width="120"
    height="126.968"
    viewBox="0 0 31.75 33.594"
    xmlns="http://www.w3.org/2000/svg"
    className="Spinner-wrong"
  >
    <g transform="translate(0 .922)">
      <circle cx="6.521" cy="6.521" r="2.4" />
      <circle cx="25.229" cy="6.521" r="2.4" />
      <circle cx="6.521" cy="25.229" r="1.646" />
      <circle cx="25.229" cy="25.229" r="1.646" />
      <circle cx="15.875" cy="2.646" r="3.4" />
      <circle cx="15.875" cy="29.104" r="1.3" />
      <circle cx="2.646" cy="15.875" r="2" />
      <circle cx="29.104" cy="15.875" r="2" />
    </g>
  </svg>
);

const App: FC = () => (
  <div
    style={{
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h2 style={{ marginBottom: "20px" }}>Two SVG spinners...</h2>
    <div
      style={{
        width: "14vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30pt",
        }}
      >
        <SpinnerWrong />
        👎
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30pt",
        }}
      >
        <Spinner />
        👍
      </div>
    </div>
  </div>
);

export default App;
