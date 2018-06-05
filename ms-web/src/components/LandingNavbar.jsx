import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { LogoFull, LogoPin } from 'components/public';
import "styles/LandingNavbar.css";

class LandingNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderFullLogo: true
    };
  }

  // isActive = (match, location) => {
  //   const active = location.pathname === "/";
  //   // this.setState({
  //   //   renderFullLogo: active
  //   // });
  //   console.log(active)
  //   return active;
  // }

  render() {
    const { match } = this.props;

    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink exact to="/" className="navbar-logo-inactive" activeClassName="navbar-logo-active">
              {match && match.params && match.params.active
                ? <LogoPin height={50} width={50} />
                : <LogoFull height={50} width={250} />
              }
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer exact to="/">
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

// const LandingNavbar = withRouter(props => <LandingNavbar {...props} />);

export default LandingNavbar;
