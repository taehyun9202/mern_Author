import React from 'react';
import { Link } from '@reach/router';


const Nav = props => {
  return (
    <nav className="navbar is-transparent" style={{marginLeft:"40px", marginRight:"40px"}}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28" />
        </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu" >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/new" className="navbar-item">
            New
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;