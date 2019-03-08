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
  Sidebar
} from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
class HeaderBar extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            // inverted
            textAlign="center"
            style={{ paddingTop: '2px' }}
            //  style={{ padding: '1em 0em' }}
            vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              // style={{ height: 43 }}

              size="large">
              <Container>
                <Menu.Item as={NavLink} exact to="/">
                  Home
                </Menu.Item>

                <Menu.Item as={NavLink} to="/products">
                  Products
                </Menu.Item>

                <Menu.Item>Point</Menu.Item>
                <Dropdown item text="Товары" simple>
                  <Dropdown.Menu>
                    <Dropdown.Item>Телефоны</Dropdown.Item>
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
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}>
                    Cart
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            {children}
          </Segment>
        </Visibility>
      </Responsive>
    );
  }
}

HeaderBar.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation="push"
          // inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}>
          <Menu.Item as={NavLink} exact to="/">
            Home
          </Menu.Item>

          <Menu.Item as={NavLink} to="/products">
            Products
          </Menu.Item>

          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            // inverted
            textAlign="center"
            style={{ minHeight: '100vh', padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a">Cost</Button>
                  <Button
                    as="a"
                    style={{ marginLeft: '0.5em' }}
                    basic
                    color="blue">
                    Cart
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const HeaderMenu = ({ children }) => (
  <div>
    <HeaderBar>{children}</HeaderBar>
    <MobileContainer>{children}</MobileContainer>
  </div>
);
export default HeaderMenu;
