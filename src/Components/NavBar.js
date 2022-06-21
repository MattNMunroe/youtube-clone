import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const Nav = () => {
  return (
    <header>
      <div className="nav">
        <img
          className="logo-img"
          src="https://c.tenor.com/u8X39eJp7xcAAAAC/youtube-dance.gif"
          alt=""
        />
        <Link to="/">
          <div className="nav-element">Home</div>
        </Link>
        <Link to="/about">
          <div className="nav-element">About</div>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
