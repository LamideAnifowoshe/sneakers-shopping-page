import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import ImageProduct1 from "./images/imageproduct1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo.svg";
import Image1 from "./images/image1.png";

const price = 125.0;

const NavBar = ({ items }) => {
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
            <img src={Logo} alt="" />
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
              <NavDropdown
                title=<FontAwesomeIcon icon={faCartShopping} />
                id="navbarScrollingDropdown"
              >
                {items === 0 ? (
                  <Card style={{ width: "20rem" }}>
                    <Card.Title>Cart</Card.Title>
                    <Card.Text style={{ color: "grey" }}>
                      Cart is empty.
                    </Card.Text>
                  </Card>
                ) : (
                  <Card style={{ width: "20rem" }}>
                    <Card.Title>Cart</Card.Title>
                    <Card.Body>
                      <Card.Img
                        variant="left"
                        src={ImageProduct1}
                        style={{ width: "50px" }}
                      />
                      <Card.Text style={{ color: "grey" }}>
                        Fall Limited Edition Sneakers {""}{" "}
                        <FontAwesomeIcon icon={faTrashCan} />
                        <br />$ {price}.00 x {items} $ {`${price * items}`}.00
                      </Card.Text>
                      <Button
                        variant="light"
                        size="lg"
                        style={{
                          backgroundColor: "darkorange",
                          color: "white",
                          width: "90%",
                        }}
                      >
                        Checkout
                      </Button>
                    </Card.Body>
                  </Card>
                )}
              </NavDropdown>

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
