import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color='faded' light expand='md'>
        <NavbarBrand tag={RouterNavLink} to='/'>
          Home
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to='/summary_stats'>
                Yearly Summaries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to='/about'>
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
