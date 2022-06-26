import React from "react";
import "../style/WProfile.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function WProfile() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="mainProfile">
      <img
        className="backgroundProfile"
        src="https://surry.edu/uploads/images/_heroImage/GettyImages-1147804793.jpg"
      />
      <div className="contProfile">
        <div className="detailsProfile">
          <div className="topDetailsProfile">
            <img
              src="https://surry.edu/uploads/images/_heroImage/GettyImages-1147804793.jpg"
              className="profileImgProfile"
            />
            <div className="nameSubConProfile">
              <div className="nameConProfile">
                <div>
                  <div className="pleft">
                    <p className="nameProfile">Hassand Jouda </p>
                  </div>
                  <div className="right">
                    <input value="@car.fixing" className="STEP" />
                  </div>
                </div>
                {/* <div className="gg" style={{ clear: "both" }}>
                  <p className="usernameProfile">Hassan Jouda</p>
                </div> */}
                <div className="perProfile">
                  <div className="per2Profile">
                    <p>
                      <span className="percentageProfile">91%</span>
                      Completed Jobs
                    </p>
                    <p>
                      <span className="percentageProfile">85%</span>
                      Being On Time
                    </p>
                  </div>
                  <div className="per2Profile">
                    <p>
                      <span className="percentageProfile">63%</span>
                      On Budget
                    </p>
                    <p>
                      <span className="percentageProfile">75%</span>
                      Hiring Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomDetailsProfile">
            <div className="contactProfile">
              <p style={{ color: "#949494", "font-weight": "bold" }}>
                Phone Number :
              </p>
              <p style={{ fontSize: "16px" }}>0599... </p>
              <p style={{ color: "#949494", "font-weight": "bold" }}>
                Location:
              </p>
              <p style={{ fontSize: "16px" }}>Gaza</p>
              <div className="st1">
                <p
                  style={{
                    color: "#949494",
                    "font-weight": "bold",
                    marginRight: "30px",
                  }}
                >
                  rating :
                </p>{" "}
                <ReactStars
                  {...{
                    size: 25,
                    value: 3.5,
                    edit: false,
                    isHalf: true,
                  }}
                />{" "}
              </div>
            </div>
            <div className="aboutConProfile">
              <p style={{ color: "#949494", "font-weight": "bold" }}>Skills:</p>
              <p style={{ fontSize: "16px" }}>(cars: 3years of experience)</p>
              <p style={{ color: "#949494", "font-weight": "bold" }}>
                About Hassan:
              </p>
              <p style={{ fontSize: "16px" }}>
                My name is Hassan, I've been working in the fixing cars field
                for 10 years
              </p>
            </div>
          </div>
        </div>
        <div className="hireProfile">
          <p className="titleHireProfile">Hire me:</p>
          <textarea
            className="messageTextProfile"
            placeholder="enter your message..."
          />
          <button className="sendBtnProfile">Send</button>{" "}
          <div className="sta">
            {" "}
            <p className="ddd"> Please rate the performance</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
