
import PropTypes from 'prop-types';
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

} from 'semantic-ui-react';

// import React, { Component } from 'react';
// import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './header.css';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
class HeaderBar extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            // style={{ minHeight: 100, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            {children}
          </Segment>
        </Visibility>

        
      </Responsive>
    )
  }
}

HeaderBar.propTypes = {
  children: PropTypes.node,
}
//  class HeaderBar extends Component {
//   state = {
//     activeItem: 'Home',
//   };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <Menu>
//         <Link exact to="/">
//           <Menu.Item
//             name="Home"
//             active={activeItem === 'Home'}
//             onClick={this.handleItemClick}>
//             Home
//           </Menu.Item>
//         </Link>
//         <Link to="/products">
//           <Menu.Item
//             name="Products"
//             active={activeItem === 'Products'}
//             onClick={this.handleItemClick}>
//             Products
//           </Menu.Item>
//         </Link>

//         <Dropdown item text="Language">
//           <Dropdown.Menu>
//             <Dropdown.Item>English</Dropdown.Item>
//             <Dropdown.Item>Russian</Dropdown.Item>
//             <Dropdown.Item>Spanish</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>

//         <Menu.Menu position="right">
//           <Menu.Item name="Cost">Cost</Menu.Item>

//           <Menu.Item name="Cart">Cart</Menu.Item>
//         </Menu.Menu>
//       </Menu>
//     );
//   }
// }

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            // style={{ maxHeight: '100vh' , padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
           {children}
          </Segment>

          
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const HeaderMenu = ({ children }) => (
  <div>
    <HeaderBar>{children}</HeaderBar>
    <MobileContainer>{children}</MobileContainer>
  </div>
)
export default HeaderMenu;

// const Header = () => (
//   <Menu className="nav">
//     <Menu.Item  name="browse">
//       <NavLink exact to="/">
//         Home
//       </NavLink>
//     </Menu.Item>

//     <Menu.Item  name="submit" >
//       <NavLink to="/products">Products</NavLink>
//     </Menu.Item>

//     <Menu.Menu position="right">
//       <Menu.Item name="signup">Cost</Menu.Item>

//       <Menu.Item name="help">Cart</Menu.Item>
//     </Menu.Menu>
//   </Menu>
// );
// export default Header;
