import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import logo from "../images/vision_code_500x500_logo.png"


class Navbar extends Component {

  render() {
    return (
      <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong className="black-text"><img src={logo} className="logo" alt="vision code logo"/></strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3"  navbar>
        <MDBNavbarNav left>
          <MDBNavItem >
            <MDBNavLink to="/" className="black-text">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/curriculum" className="black-text">Curriculum</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/pricing" className="black-text">Pricing</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/requirements" className="black-text">Requirements</MDBNavLink>
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
