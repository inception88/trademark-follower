import { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu, Affix } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends Component {
  
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;
    return (
      <Affix><Menu mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/"><Link to="/">
          Trademark Follower
          </Link></Menu.Item>
          {!this.props.authenticated && <Menu.Item key="/signup"><Link to="/signup">
          Sign Up
          </Link></Menu.Item>}
          {!this.props.authenticated && <Menu.Item key="/login"><Link to="/login">
          Login
          </Link></Menu.Item>}
          {this.props.authenticated && <Menu.Item key="/logout"><Link to="/logout">
          Logout
          </Link></Menu.Item>}
        </Menu>
      </Affix>
    );
  }
}
 
export default withRouter(NavBar);