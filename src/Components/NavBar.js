import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const Nav = () => {
  return (
    <header>
      <h1>
        <Link to="/">YouTube</Link>
      </h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/about">About</Link>
      </h2>
    </header>
  );
};

export default Nav;
