import React from 'react';
import './header.css';
import logo from './logo/logo.png';
import { Dropdown, Image, Menu, Icon } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

const HeaderMenu = () => (
  <Menu fixed="top" inverted>
    <Menu.Menu>
      <Menu.Item className="mobileBar">
        <Image size="mini" src={logo} />
      </Menu.Item>
      <Menu.Item className="mobileBar" as={NavLink} exact to="/">
        Home
      </Menu.Item>

      <Menu.Item className="mobileBar" as={NavLink} to="/mobile">
        Mobile
      </Menu.Item>
      <Dropdown item icon="sidebar" simple className="longBar">
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} exact to="/">
            Home
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/mobile">
            Телефоны
          </Dropdown.Item>
          <Dropdown.Item>Планшеты</Dropdown.Item>
          <Dropdown.Item>Консоли</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item className="mobileBar" as="a">
        Tablet
      </Menu.Item>
      <Menu.Item className="mobileBar" as="a">
        Console
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position="right">
      <Menu.Item as="a">Log in</Menu.Item>
      <Menu.Item as="a">Cart</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default HeaderMenu;
