import React from "react";
import "../style/Footer.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaHeadset,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer ooter className="mainFooter">
      <div className="conSubFooter">
        <div className="subFooter">
          <p>About us</p>
          <ul>
            <li>Company </li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="subFooter">
          <p>Contact us</p>

          <p>
            {" "}
            <FaHeadset />
          </p>
          <ul>
            <li>help@swifthouse.com</li>
            <li>
              <FaPhoneAlt /> +970595096298
            </li>
          </ul>
        </div>

        <div className="subFooter">
          <p>Follow us</p>
          <ul>
            <li>
              <FaFacebook /> Hackerny
            </li>
            <li>
              <FaInstagram /> Hackerny
            </li>
            <li>
              <FaTwitter /> Hackerny
            </li>
            <li>
              <FaLinkedin /> Hackerny
            </li>
          </ul>
        </div>
      </div>
      <p className="cop">Copyright ® 2021 Hacker All rights Rcerved</p>
    </footer>
  );
};

export default Footer;
