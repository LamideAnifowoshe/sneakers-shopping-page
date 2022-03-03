import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";
import Image4 from "./images/image4.jpg";
import Image5 from "./images/image5.jpg";
import ImageProduct4 from "./images/imageproduct4.jpg";
import ImageProduct1 from "./images/imageproduct1.jpg";
import ImageProduct2 from "./images/imageproduct2.jpg";
import ImageProduct3 from "./images/imageproduct3.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const CarouselItem = () => {
  return (
    <div>
      <Carousel className="pt-5 mt-5 ms-5">
        <Carousel.Item>
          <img
            className="d-block"
            src={Image2}
            alt=""
            style={{
              borderRadius: "15px",
              width: "400px",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Image3}
            alt=""
            style={{ borderRadius: "15px", width: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Image4}
            alt=""
            style={{ borderRadius: "15px", width: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Image5}
            alt=""
            style={{ borderRadius: "15px", width: "400px" }}
          />
        </Carousel.Item>
      </Carousel>

      <CardGroup className="ms-5 mt-3" style={{ width: "440px" }}>
        <Card>
          <Card.Img
            variant="top"
            src={ImageProduct1}
            style={{
              width: "80px",
              borderRadius: "8px",
            }}
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={ImageProduct2}
            style={{ width: "80px", borderRadius: "8px" }}
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={ImageProduct3}
            style={{ width: "80px", borderRadius: "8px" }}
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={ImageProduct4}
            style={{ width: "80px", borderRadius: "8px" }}
          />
        </Card>
      </CardGroup>
    </div>
  );
};

export default CarouselItem;
