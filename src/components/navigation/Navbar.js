import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <Menu mode="horizontal">
        <Menu.Item>
        <Link to="/">
          Navigation One
          </Link>
        </Menu.Item>
                <Menu.Item>
        <Link to="/home">
          Navigation Two
          </Link>
                  </Menu.Item>
                <Menu.Item>
        <Link to="/search">
          Navigation Three
          </Link>
        </Menu.Item>
        <Menu.Item>
            Got 'Em!
        </Menu.Item>
      </Menu>
    );
}
 
export default NavBar;