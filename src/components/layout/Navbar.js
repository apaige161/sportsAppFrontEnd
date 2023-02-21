import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import AuthContext from '../../Context/AuthContext';
import LogoutBtn from "../auth/Logout";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// show login, register if not logged in
// show customers link if user is logged in


export default function NavbarComponent() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Picante Picks</Navbar.Brand>
          <LogoutBtn />
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {loggedIn === false && (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
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
              </>
            )}

            {loggedIn === true && (
              <>
                {/* <Nav.Link as={Link} to="/customer">
                  Customer
                </Nav.Link> */}
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
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>

  );
}
