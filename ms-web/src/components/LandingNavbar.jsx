import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import "styles/LandingNavbar.css";

class LandingNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Metrospect</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/eat">
              <NavItem>Eat</NavItem>
            </LinkContainer>
            <LinkContainer to="/drink">
              <NavItem>Drink</NavItem>
            </LinkContainer>
            <LinkContainer to="/play">
              <NavItem>Play</NavItem>
            </LinkContainer>
            <LinkContainer to="/visit">
              <NavItem>Visit</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default LandingNavbar;
