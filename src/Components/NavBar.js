import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Youtube
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav