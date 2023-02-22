import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import AuthContext from '../../Context/AuthContext';
import LogoutBtn from "../auth/Logout";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './layout.css'

// show login, register if not logged in
// show customers link if user is logged in


export default function NavbarComponent() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div id="main-container">
        <div className="brand">
          <Navbar.Brand href="/">Picante Picks</Navbar.Brand>
        </div>
      
      {loggedIn === false && (
        <div bg="dark" variant="dark" class="navigation">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/playerBirthday">
            Birthdays
          </Nav.Link>
          <Nav.Link as={Link} to="/injuryReport">
            Injury Report
          </Nav.Link>
          <Nav.Link as={Link} to="/lotteryTickets">
            Lottery Tickets
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </div>
      )}

      {loggedIn === true && (
        <div bg="dark" variant="dark" class="navigation">
          <Nav.Link as={Link} to="/playerBirthday">
            Birthdays
          </Nav.Link>
          <Nav.Link as={Link} to="/injuryReport">
            Injury Report
          </Nav.Link>
          <Nav.Link as={Link} to="/lotteryTickets">
            Lottery Tickets
          </Nav.Link>
          <Nav.Link as={Link} to="/askai">
            Ask AI
          </Nav.Link>
          <LogoutBtn />
        </div>
      )}
    </div>
  );
}
