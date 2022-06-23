import React from "react";
import "../style/Cardsworkers.css";
import { Link } from "react-router-dom";

export default function Cardsworkers() {
  return (
    <div className="mainWorkerCard">
      
  
      
      <img
        className="backgroundWorkerCard"
        src="https://vid.alarabiya.net/images/2019/05/24/07118231-c182-4fb3-b77a-a26a1b772a52/07118231-c182-4fb3-b77a-a26a1b772a52_16x9_1200x676.jpg?width=1138"
      />
      <div
        style={{
          display: "flex",
          "margin-top": "-50px",
          "z-index": "100",
          position: "relative",
          "margin-Bottom": "100px",
        }}
      >
        <img
          className="profileImgWorkerCard"
          src="https://vid.alarabiya.net/images/2019/05/24/07118231-c182-4fb3-b77a-a26a1b772a52/07118231-c182-4fb3-b77a-a26a1b772a52_16x9_1200x676.jpg?width=1138"
        />
        <div className="nameConWorkerCard">
          <p
            style={{
              "font-weight": "900",
              "font-size": "18px",
              "line-height": "1",
              "margin-top": "10px",
            }}
          >
            Hassan{" "}
          </p>
          <p
            style={{
              opacity: "42%",
            }}
          >
            hassan.jouda{" "}
          </p>
        </div>
      </div>
      <div className="aboutWorkerCard">
        <p
          style={{
            "font-weight": "bold",
          }}
        >
          About the worker:
        </p>
        <p>HAcker</p>
      </div>
      <button className="button" type="submit">
        <Link to="/WProfile" className="aa">
          Profile{" "}
        </Link>
      </button>
    </div>
  );
}
