import React, { Component } from 'react';
import './header.css';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button,
  Sticky
} from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

const NavBarMobile = ({ children, onPusherClick, onToggle, visible }) => (
  
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      
    >
      
      <Menu.Item as={NavLink} exact to="/">
        Home2
      </Menu.Item>

      <Menu.Item as={NavLink} to="/mobile">
        Mobile2
      </Menu.Item>

    </Sidebar>
    
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh'}}
      
    >
       
      <Menu
      
        inverted>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} exact to="/">
            Home
          </Menu.Item>

          <Menu.Item as={NavLink} to="/mobile">
            Mobile
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sticky as={Button}>
      
      C
</Sticky>
      {children}
      
    </Sidebar.Pusher>
    </Sidebar.Pushable>
    
);

const NavBarDesktop = () => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    <Menu.Item as={NavLink} exact to="/">
      Home
    </Menu.Item>

    <Menu.Item as={NavLink} to="/mobile">
      Mobile
    </Menu.Item>

    <Menu.Item as="a">Company</Menu.Item>
    <Menu.Item as="a">Careers</Menu.Item>
    <Menu.Item as="a">Log in</Menu.Item>
    <Menu.Item as="a">Sign Up</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item as="a">Log in</Menu.Item>
      <Menu.Item as="a">Sign Up</Menu.Item>
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
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            // style={{ position:'fixed'}}
            
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            
            visible={visible}>
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const HeaderMenu = ({ children }) => <NavBar>{children}</NavBar>;
export default HeaderMenu;
