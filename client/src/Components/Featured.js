import React, { useState } from "react";

import "../style/Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <>
        <div className="featuredItem">
          <img
            src="https://kanga-roof.com/wp-content/uploads/sites/352/2021/01/guarantee-craftsmen.png"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2 className="eee"> Premium Craftsmen Guarantee</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://cdn-icons.flaticon.com/png/512/310/premium/310779.png?token=exp=1656370111~hmac=9b793896fb65e68c5e2415668598e5c1"
            alt=""
            className="featuredImg rere"
          />
          <div className="featuredTitles">
            <h2 className="eee">quality</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://www.connect-local.co.uk/wp-content/uploads/2017/08/expertise-article-image.png"
            alt=""
            className="featuredImg "
          />
          <div className="featuredTitles">
            <h2 className="eee"> expertise</h2>
          </div>
        </div>
      </>
    </div>
  );
};

export default Featured;
