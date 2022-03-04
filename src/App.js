import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import CarouselItem from "./components/CarouselItem";
import Container from "react-bootstrap/Container";
import Sneakers from "./components/Sneakers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [items, setItems] = useState(0);

  const handleIncrement = () => {
    if (items < 10) {
      setItems(items + 1);
    }
  };

  const handleDecrement = () => {
    if (items > 0) {
      setItems(items - 1);
    }
  };

  const handleChange = (e) => {
    setItems(e.target.value);
  };

  return (
    <div className="App">
      <NavBar items={items} />
      <Container style={{ width: "80%" }}>
        <Row>
          <Col sm={7}>
            <CarouselItem />
          </Col>{" "}
          <Col sm={5}>
            <Sneakers
              onIncrement={handleIncrement}
              onChange={handleChange}
              onDecrement={handleDecrement}
              items={items}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
