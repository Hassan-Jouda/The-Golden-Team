import React, { useState } from "react";

import "../style/Filter.css";

const Filter = () => {
  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Filter</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per hour</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per hour</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Hours of Working:</span>
                  <input type="number" min={1} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Language</span>
                  <input type="text" min={0} className="lsOptionInput test2" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Experince</span>
                  <input type="text" min={1} className="lsOptionInput test2" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
