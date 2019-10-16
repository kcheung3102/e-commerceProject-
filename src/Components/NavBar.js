import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline } from "mdbreact";
import logo from "../Logo.svg";
import cart from "../iconfinder_Cart.svg";


class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <MDBNavbar color="bg-dark text-white" dark expand="md">
      <MDBNavbarBrand>
      <MDBNavLink to="/">
        <img src={logo} alt="shop logo" className="navbar-logo" />
      </MDBNavLink>
        <h1 className="branding-title">ShopX</h1>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-2">
                  <input className="form-control mr-sm-4" type="text" placeholder="Search for brand,color,etc." aria-label="Search" />
                  <MDBIcon icon="search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBIcon icon="user" />
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
              <MDBDropdownItem href="#!">Log in</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
          <MDBNavItem active >
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/Details">About</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/ProductList">Products</MDBNavLink>
        </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/cart">
              <i class="fas fa-cart-plus"> My Cart</i>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>

    );
  }
}

/*<nav className="navbar">
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
</nav> */

export default NavBar;
