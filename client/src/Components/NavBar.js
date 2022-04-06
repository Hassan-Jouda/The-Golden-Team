import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <>
        <Navbar variant="dark" className="nnvv">
          <Container>
            <Navbar.Brand>Hacker</Navbar.Brand>
            <Nav className="m1-auto">
              <Nav.Link>
                <Link to="/Home" className="navn">
                  {" "}
                  Home{" "}
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/About" className="navn">
                  AboutUs
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Login" className="navn">
                  Log in
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Communtiy" className="navn">
                  Communtiy
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Workers" className="navn">
                  Workers
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Profile" className="navn">
                  Profile
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
export default NavBar;
