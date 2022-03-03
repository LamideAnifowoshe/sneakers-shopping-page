import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo.svg";
import Image1 from "./images/image1.png";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="pt-4 pb-4"
        style={{
          width: "80%",
          margin: "auto",
          padding: "0 30px",
          borderBottom: "1px solid hsl(220, 14%, 75%)",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Collections</Nav.Link>
              <Nav.Link href="#pricing">Men</Nav.Link>
              <Nav.Link href="#pricing">Women</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#pricing">
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                <img
                  src={Image1}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
