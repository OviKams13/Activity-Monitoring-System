import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="App Logo" />
          <span>Activity Monitoring System</span>
        </a>
        <a href="/">Desktop Activity</a>
        <Link to="/GitHubPage">GitHub Activity</Link>
      </div>

      <div className="right">
        <Link to="/login">Sign in</Link>
        <Link to="/register" className="registerr">Sign up</Link>

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
