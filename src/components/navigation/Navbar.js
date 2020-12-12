import { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu, Affix } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends Component {

  state = {
    loggedIn: !!localStorage.token
  }
  
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  logout = () => {
    localStorage.clear()
  }

  render() {
    const { location } = this.props;
    return (
      <Affix><Menu mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/"><Link to="/">
          Trademark Follower
          </Link></Menu.Item>
        <Menu.Item key="/signup"><Link to="/signup">
          Sign Up
          </Link></Menu.Item>
        <Menu.Item key="/login"><Link to="/login">
          Login
          </Link></Menu.Item>
          {this.state.loggedIn && <Menu.Item key="/logout"><Link to={this.logout}>
          Logout
          </Link></Menu.Item>}
        </Menu>
      </Affix>
    );
  }
}
 
export default withRouter(NavBar);