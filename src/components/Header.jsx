import React from "react";
import "../styles/Header.css";
import logo from "/romap-logo.png"; // <- place your logo in /public as romap-logo.png
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <header className="header">
  <div className="header-left">
    <img src={logo} className="header-logo" alt="RoMap Logo" />
    <div className="brand-text">
      <h2 className="header-title">RoMap</h2>
      <p className="header-tagline">Discover Romania, region by region.</p>
    </div>
  </div>

  <nav className="header-nav">
    <Link to="/">Home</Link>
    <Link to="/history">History</Link>
    <Link to="/region">Regions</Link>
    <Link to="/quizzes">Quizzes</Link>
    <Link to="/cooking">Cooking</Link>
    <Link to="/religion">Religion</Link>
    <Link to="/profile">Profile</Link>
    <Link className="more-link" to="/more">More</Link>
  </nav>

  <div className="header-right">
    <select className="lang-select">
      <option value="en">EN</option>
      <option value="ro">RO</option>
    </select>
    <button className="logout-btn">Logout</button>
  </div>
</header>

  );
};

export default Header;
