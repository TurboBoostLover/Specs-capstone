import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="logout">
        Log Out
      </Link>
      <Link to="/game" className="gamefoot">
        Game
      </Link>
    </div>
  );
};

export default Footer;
