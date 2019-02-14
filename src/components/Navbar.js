import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class Navbar extends Component {

  render() {
    return (
      <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong className="black-text">My last Goodbyes</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3"  navbar>
        <MDBNavbarNav left>
          <MDBNavItem >
            <MDBNavLink to="/home" className="black-text">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/profile" className="black-text">Profile</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/search" className="black-text">Search</MDBNavLink>
          </MDBNavItem>

        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light black-text" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light black-text" to="#!">
              <MDBIcon fab icon="google-plus-g" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret className="black-text">
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="/signup" >Sign up</MDBDropdownItem>
                <MDBDropdownItem href="/login">Log in</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }

}

export default Navbar;
