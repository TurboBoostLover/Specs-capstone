import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {

    return (<div className="footer">
    <Link to='/' className="logout">Log Out</Link>
    </div>
        )
}

export default Footer