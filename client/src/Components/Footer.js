import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer ooter className="mainFooter">
      <div className="conSubFooter">
        <div className="subFooter">
          <p>About us</p>
          <ul>
            <li>Company</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="subFooter">
          <p>Contact us</p>
          <ul>
            <li>help@swifthouse.com</li>
            <li>+970595096298</li>
          </ul>
        </div>

        <div className="subFooter">
          <p>Follow us</p>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linked In</li>
          </ul>
        </div>
      </div>
      <hr className="footerHr" />
    </footer>
  );
};

export default Footer;
