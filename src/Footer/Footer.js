import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Track Your Order</li>
            <li>Returns & Exchanges</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="Subscription">
        <form action="/action_page.php" id="form1">
          <label className="Subscription-text" for="fname">
            Subscribe to Our Shop
          </label>
          <input
            className="Subscription-form"
            type="text"
            id="fname"
            name="fname"
          ></input>
          <input
            className="Subscription-btn"
            type="submit"
            value="Submit"
          ></input>
        </form>
        <InstagramIcon
          onClick={() => window.open("https://www.instagram.com", "_blank")}
          fontSize="large"
          className="icon"
        ></InstagramIcon>
        <TwitterIcon
          onClick={() => window.open("https://www.twitter.com", "_blank")}
          fontSize="large"
          className="icon"
        ></TwitterIcon>
      </div>
      <hr className="hr"></hr>
      <div className="footer-bottom">
        <p>&copy; 2023 Studio Seven</p>
      </div>
    </footer>
  );
}

export default Footer;
