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

const getWidth = () => {
    const isSSR = typeof window === 'undefined';
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };
class MobileContainer extends Component {
    state = {};
    
    handleSidebarHide = () => this.setState({ sidebarOpened: false });
  
    handleToggle = () => this.setState({ sidebarOpened: true });
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
    render() {
      const { children } = this.props;
      const { sidebarOpened } = this.state;
      const { fixed } = this.state;
      return (
        <div>
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
  
            <Menu.Item as={NavLink} to="/mobile">
              Mobile
            </Menu.Item>
  
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>
        
          <Menu
                  // pointing
                  // secondary
                  size="large"
                  fixed={fixed ? 'top' : null}
                // inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                // fixed='top'
                 >
            <Menu.Item
             
              onClick={this.handleToggle}>
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
          
          <Sidebar.Pusher dimmed={sidebarOpened} >
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
        
       
              // inverted
              textAlign="center"
              style={{
                minHeight: '100vh',
                // minHeight: 'auto',
                padding: '1em 0em'
              }}
              vertical>
             
             
              
            </Segment>
             
            </Visibility>
            
          </Sidebar.Pusher> 
        </Responsive>
        <Container style={{ marginTop: '7em' }}>
                
                {children}
        </Container>
        </div>
      );
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node
};
export default MobileContainer;