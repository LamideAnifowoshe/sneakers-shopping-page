import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Sneakers = () => {
  return (
    <div>
      <div className="pt-5 mt-5">
        <h6 className="pt-5">SNEAKER COMPANY</h6>
        <h1 style={{ fontWeight: "bolder" }}>Fall Limited Edition Sneakers</h1>
        <p className="pt-4 text-break">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <h4 style={{ fontWeight: "bolder" }}>
          $125.00{" "}
          <Badge bg="light" style={{ color: "orange" }}>
            -50%
          </Badge>
        </h4>
        <del
          style={{
            fontWeight: "bold; color: rgb(197, 194, 194)",
            color: "grey",
          }}
        >
          $250.00
        </del>
      </div>
      <div>
        <Button variant="light" style={{ fontWeight: "bolder" }}>
          <Badge bg="light" style={{ color: "orange", padding: "0 30px 0 0" }}>
            -
          </Badge>{" "}
          3{" "}
          <Badge bg="light" style={{ color: "orange", padding: "0 30px" }}>
            +
          </Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <Button
          variant="light"
          size="lg"
          style={{ backgroundColor: "orange", color: "white", width: "220px" }}
        >
        <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Sneakers;
