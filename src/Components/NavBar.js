import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.svg";
import cart from "../iconfinder_Cart.svg";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="shop logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <img src={cart} alt="cart logo" className="nav-bar-logo-cart" />
              my cart
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
