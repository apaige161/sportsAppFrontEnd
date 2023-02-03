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
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Picante Picks</Navbar.Brand>
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
              </>
            )}
          </Nav>
        </Container>
        <LogoutBtn />
      </Navbar>

      {/* // affiliate link */}

      {/* <Navbar bg="dark" variant="dark" classname="text-center">
        <Container>
          <Nav.Link as={Link} to="https://www.fanduel.com/">
            <img
              alt="FanDuel shield"
              src="https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Homepage/Home/fd-shield-logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top text-center"
            />{" "}
          </Nav.Link>
          <Nav.Link as={Link} to="https://www.draftkings.com/">
            <img
              alt=""
              src="https://d2tjpz01y5bfgl.cloudfront.net/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top text-center"
            />{" "}
          </Nav.Link>
          
        </Container>
      </Navbar> */}
    </>

    /* // <>
    //   <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </> */
  );
}
