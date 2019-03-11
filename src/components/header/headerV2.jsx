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
  Sticky,
  Header,
  Image
 
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
      <Segment style={{ padding: 0 }}>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
          // getWidth={getWidth}
          // minWidth={Responsive.onlyTablet.minWidth}
        >
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}>
            <Segment
              style={{ padding: 0 }}
              // inverted
              textAlign="center"
              //  style={{ padding: '1em 0em' }}
              vertical>
              <Menu
                fixed={fixed ? 'top' : null}
                // inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                // style={{ height: 43 }}

                // size="large"
              >
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
                      primary={fixed}
                      style={{ marginLeft: '0.5em' }}>
                      Cart
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
            {children}
          </Visibility>
        </Responsive>
      </Segment>
    );
  }
}

HeaderBar.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
  }
  render() {
    const { children } = this.props;
    
    const { visible } = this.state
    return (
      
      <Responsive
        as={Sidebar.Pusher}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
       
       <Menu secondary  attached="top">
        <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} >
          <Icon name="sidebar" />Fffff
          </Menu.Item>  
          <Menu.Item position='right'>
                  <Button as='a' >
                    Log in
                  </Button>
                  <Button as='a'  style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>  
      </Menu>
    <Sidebar.Pushable as={Segment} attached="bottom">
      <Sidebar width='thin' as={Menu} animation="uncover" visible={this.state.menuVisible} icon="labeled" vertical inline inverted>
        <Menu.Item><Icon name="home" />Home</Menu.Item>
        <Menu.Item><Icon name="block layout" />Topics</Menu.Item>
        <Menu.Item><Icon name="smile" />Friends</Menu.Item>
        <Menu.Item><Icon name="calendar" />History</Menu.Item>    
      </Sidebar>
       <Sidebar.Pusher dimmed={this.state.menuVisible}>
            <Segment basic>
              {children}
            </Segment>
       </Sidebar.Pusher>
    </Sidebar.Pushable>
        </Responsive>
        
    )
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
