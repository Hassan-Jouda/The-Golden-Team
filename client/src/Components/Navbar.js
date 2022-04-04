import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
export default function Navv() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Hacker</Navbar.Brand>
            <Nav className="m1-auto">
              <Nav.Link>
                <Link to="/" className="navn">
                  {" "}
                  Home{" "}
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Save" className="navn">
                  About Us
                </Link>
              </Nav.Link>

              <Nav.Link className="navn">
                <Link to="/About" className="navn">
                  Log in
                </Link>
              </Nav.Link>

              <Nav.Link className="navn">
                <Link to="/Profile" className="navn">
                  Profile
                </Link>
              </Nav.Link>

              <Nav.Link className="navn">
                <Link to="/Workers" className="navn">
                  Workers
                </Link>
              </Nav.Link>

              <Nav.Link className="navn">
                <Link to="/Community" className="navn">
                  Community
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
