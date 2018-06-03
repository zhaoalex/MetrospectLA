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
            <Link to="/">
              {this.props.isLanding
                ? <p>Full Logo</p>
                : <p>Pin Logo</p>
                // TODO: this won't work
              }
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
            <NavItem className="home">HOME</NavItem>
            </LinkContainer>
            <LinkContainer to="/eat">
              <NavItem className="eat">EAT</NavItem>
            </LinkContainer>
            <LinkContainer to="/drink">
              <NavItem className="drink">DRINK</NavItem>
            </LinkContainer>
            <LinkContainer to="/play">
              <NavItem className="play">PLAY</NavItem>
            </LinkContainer>
            <LinkContainer to="/visit">
              <NavItem className="visit">VISIT</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default LandingNavbar;
