import PropTypes from 'prop-types';
import './header.css';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Visibility,
  Icon,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';


const HeaderBar = () => (
  
  <Container>
      <Menu stackable secondary pointing fixed='top'>
              <Container>
                <Menu.Item as={NavLink} exact to="/">
                  Home
                </Menu.Item>

                <Menu.Item as={NavLink} to="/mobile">
                  Mobile
                </Menu.Item>

                <Menu.Item>Point</Menu.Item>
                <Dropdown item text="Товары" simple>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/mobile">
                      Телефоны
                    </Dropdown.Item>
                    <Dropdown.Item>Планшеты</Dropdown.Item>
                    <Dropdown.Item>Консоли</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item position="right">
                  <Button as="a">Cost</Button>
                  <Button
                    as="a"
                    basic
                    color="blue"
                    
                    style={{ marginLeft: '0.5em' }}>
                    Cart
                  </Button>
                </Menu.Item>
              </Container>
    </Menu>
   
    </Container>
    
    
)

HeaderBar.propTypes = {
  children: PropTypes.node
};


  



export default HeaderBar;
