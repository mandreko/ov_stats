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
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
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
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Top Movies
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  <NavLink
                    tag={RouterNavLink}
                    to={`/top_movies/2017`}
                  >2017
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    tag={RouterNavLink}
                    to={`/top_movies/2016`}
                  >2016
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    tag={RouterNavLink}
                    to={`/top_movies/2015`}
                  >2015
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>








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
