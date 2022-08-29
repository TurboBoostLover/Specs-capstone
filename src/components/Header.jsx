import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="footer">
      <Link to="/home" className="foothome">
        Home
      </Link>
      <Link to="/wishlist" className="footwish">
        Wish List
      </Link>
      <Link to="/game" className="gamefoot">
        Game
      </Link>
      <Link to="/" className="logout">
        Log Out
      </Link>
    </div>
  );
};

export default Header;
