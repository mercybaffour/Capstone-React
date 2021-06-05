import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo.png';


function Header() {
    return (

        <nav className="navbar navbar-expand-md bg-light sticky-top">
          <div className="container-fluid">
              <Link  to="/" className="navbar-brand"><img className="img-responsive" src={img} alt="" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                          <Link to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/Features">Features</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

    );
  }

export default Header;
