import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './header.css';

export default class MenuExampleMenus extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}>
          <Link exact to="/">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item
          name="Products"
          active={activeItem === 'Products'}
          onClick={this.handleItemClick}>
          <Link to="/products">Products</Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="Cost">Cost</Menu.Item>

          <Menu.Item name="Cart">Cart</Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

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
