import React from 'react';
// import { Link } from 'react-router-dom';

const Nav = (props) => {

  return (
    <nav className="site-nav">
      <a href="#!">Products</a>

      <div>
        <ul>
          {/* <Link to="/"> */}
            <li>Home</li>
          {/* </Link> */}

          {/* <Link to="/basket"> */}
            <li>Basket ({props.basketSize})</li>
          {/* </Link> */}

        </ul>
      </div>
    </nav>
  )
}

export default Nav;
