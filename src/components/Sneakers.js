import React from "react";
import Badge from "react-bootstrap/Badge";

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
    </div>
  );
};

export default Sneakers;
