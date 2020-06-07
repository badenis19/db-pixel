import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav>
      <a href="/products">PS</a>

      <div>
        <ul>
          <Link to="/products">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/tracking">
            <li>Tracking Data</li>
          </Link>

        </ul>
      </div>
    </nav>
  )
}

export default Nav;
