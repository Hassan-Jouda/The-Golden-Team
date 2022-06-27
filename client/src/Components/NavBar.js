import React from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { FaUser } from "react-icons/fa";

const NavBar = ({ auth, setAuth }) => {
  const logout = () => {
    window.localStorage.removeItem("auth");
    window.localStorage.removeItem("current");
    setAuth(false);
  };
  return (
    <div>
      <>
        <Navbar variant="dark" className="nnvv">
          <Container>
            <Navbar.Brand>
              {" "}
              <Link to="/" className="navn">
                SwiftHouse
              </Link>
            </Navbar.Brand>
            <Nav className="m1-auto">
              <Nav.Link>
                <Link to="/About" className="navn">
                  AboutUs
                </Link>
              </Nav.Link>
              {auth && (
                <>
                  <NavDropdown
                    className="navn"
                    title="Communtiy"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item className="eee">
                      <Link to="/Communtiy" className="navna">
                        Blog
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/ProblemsSolving" className="navna">
                        Problems Solving
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link>
                    <Link to="/Workers" className="navn">
                      Workers
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/Profile" className="links">
                      <FaUser className="userr" />
                    </Link>
                  </Nav.Link>
                </>
              )}
              <div>
                {auth ? (
                  <>
                    <button className="navBtn" onClick={logout}>
                      <Link to="/" className="navn">
                        Logout
                      </Link>
                    </button>
                  </>
                ) : (
                  <Link to="/Signup" className="sin">
                    Login
                  </Link>
                )}
              </div>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
export default NavBar;
