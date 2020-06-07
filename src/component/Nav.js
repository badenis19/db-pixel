import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  return (
    <nav className="site-nav">
      <a href="/">Products</a>

      <div>
        <ul>
          <Link to="/products">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

        </ul>
      </div>
    </nav>
  )
}

export default Nav;
