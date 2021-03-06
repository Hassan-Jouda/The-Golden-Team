import React from "react";
import "../style/Home.css";

const Card = ({ imgUrl, craft }) => {
  return (
    <div className="fildcard">
      <img src={imgUrl} alt={craft} width={100} height={100} />
      <h5>{craft}</h5>
    </div>
  );
};

export default Card;