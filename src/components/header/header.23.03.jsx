import React, { Component } from 'react';
import './header.css';
import logo from './logo/logo.png';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button,
  Sticky,
  Segment
} from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';


const NavBarDesktop = () => (
  <Menu fixed="top" inverted>
    <Menu.Menu className="noneMobBar">
    <Menu.Item >
      
      <Image size="mini" src={logo} />
    </Menu.Item>
    <Menu.Item className="noneMobBar" as={NavLink} exact to="/">
      Home
    </Menu.Item>

    <Menu.Item as={NavLink} to="/mobile">
      Mobile
    </Menu.Item>

    <Menu.Item as="a">Tablet</Menu.Item>
    <Menu.Item as="a">Console</Menu.Item>
    </Menu.Menu>

    <Menu.Menu position="right">
      <Menu.Item as="a">Log in</Menu.Item>
      <Menu.Item as="a">Cart</Menu.Item>
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: '5em' }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        
          <NavBarDesktop />
          <NavBarChildren>{children}</NavBarChildren>
        
      </div>
    );
  }
}

const HeaderMenu = ({ children }) => <NavBar>{children}</NavBar>;
export default HeaderMenu;
