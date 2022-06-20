import React from "react";
import "../style/WProfile.css";
import { Link } from "react-router-dom";

export default function WWPR() {
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
                    <p className="nameProfile">cccccccc</p>
                  </div>
                  <div className="right">
                    <Link to="/edit" className="links">
                      <input
                        type="button"
                        value="عدل الحساب"
                        className="STEP"
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ clear: "both" }}>
                  <p className="usernameProfile">cccccc</p>
                </div>
                <div className="perProfile">
                  <div className="per2Profile">
                    <p>
                      <span className="percentageProfile">swaaaaa</span>
                      الوظائف المكتملة
                    </p>
                    <p>
                      <span className="percentageProfile">aaaaaa</span>
                      في المعياد
                    </p>
                  </div>
                  <div className="per2Profile">
                    <p>
                      <span className="percentageProfile">aaaaaaaaaaa</span>
                      على الميزانية
                    </p>
                    <p>
                      <span className="percentageProfile">aaaaaaaaaaaaaaa</span>
                      تكرر عدد التوظيف
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomDetailsProfile">
            <div className="contactProfile">
              <p style={{ color: "#949494", "font-weight": "bold" }}>
                رقم الهاتف:
              </p>
              <p style={{ fontSize: "16px" }}>aaaaaaaaaaaaaaaaaa </p>
              <p style={{ color: "#949494", "font-weight": "bold" }}>
                المدينة:
              </p>
              <p style={{ fontSize: "16px" }}>aaaaaaaaaaaaaa</p>
            </div>
            <div className="aboutConProfile">
              <p style={{ color: "#949494", "font-weight": "bold" }}>مهارات:</p>
              <p style={{ fontSize: "16px" }}>aaaaaaaaaaaaa</p>
              <p style={{ color: "#949494", "font-weight": "bold" }}>عني:</p>
              <p style={{ fontSize: "16px" }}>aaaaaaaaaaaaaa </p>
            </div>
          </div>
        </div>
        <div className="hireProfile">
          <p className="titleHireProfile">وظفني:</p>
          <textarea
            className="messageTextProfile"
            placeholder="enter your message..."
          />
          <button className="sendBtnProfile">ارسل</button>
        </div>
      </div>
    </div>
  );
}
