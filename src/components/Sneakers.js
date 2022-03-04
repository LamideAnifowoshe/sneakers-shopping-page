import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Sneakers = ({ onIncrement, onChange, onDecrement, items, onAdd }) => {
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
        <span style={{ display: "inline-block !important" }}>
          <Button
            variant="light"
            style={{ color: "orange", fontWeight: "bolder" }}
            onClick={onDecrement}
          >
            -
          </Button>

          <input
            type="text"
            value={items}
            onChange={onChange}
            style={{
              fontWeight: "bolder",
              border: "none",
              width: "70px",
              textAlign: "center",
            }}
          />

          <Button
            variant="light"
            style={{ color: "orange", fontWeight: "bolder" }}
            onClick={onIncrement}
          >
            +
          </Button>
        </span>
        <Button
          variant="light"
          size="lg"
          onClick={onAdd}
          style={{
            backgroundColor: "darkorange",
            color: "white",
            width: "220px",
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Sneakers;
