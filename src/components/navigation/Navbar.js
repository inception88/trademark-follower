import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Affix } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <Affix><Menu mode="horizontal">
        <Menu.Item><Link to="/">
          Trademark Follower
          </Link></Menu.Item>
        <Menu.Item><Link to="/home">
          Home
          </Link></Menu.Item>
        <Menu.Item><Link to="/search">
          Search
          </Link></Menu.Item>
        <Menu.Item><Link to="/signup">
          Sign Up
          </Link></Menu.Item>
        <Menu.Item><Link to="/login">
          Login
          </Link></Menu.Item>
        </Menu>
      </Affix>
    );
}
 
export default NavBar;