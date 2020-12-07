import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Trademark Follower</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
 
export default NavBar;