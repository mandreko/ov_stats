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
import _ from 'lodash';
import axios from 'axios/index';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      years: '',
    };
  }

  componentDidMount() {
    axios.get('/years')
      .then((res) => {
        const years = res.data;
        this.setState({ years });
      });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const grouped = _.groupBy(
      this.state.years,
      years => years.name,
    );

    return (
      <Navbar color='faded' light expand='md'>
        <NavbarBrand tag={RouterNavLink} to='/'>
          Home
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
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
              <DropdownMenu>
                {Object.keys(grouped)
                  .map(key => (
                    <DropdownItem key={key}>
                      <NavLink
                        tag={RouterNavLink}
                        to={'/top_movies/' + key}
                      >{key}
                      </NavLink>
                    </DropdownItem>
                  ))}
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
