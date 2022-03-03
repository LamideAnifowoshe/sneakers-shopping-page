import NavBar from "./components/NavBar";
import CarouselItem from "./components/CarouselItem";
import Container from "react-bootstrap/Container";
import Sneakers from "./components/Sneakers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ width: "80%" }}>
        <Row>
          <Col sm={7}>
            <CarouselItem />
          </Col>{" "}
          <Col sm={5}>
            <Sneakers />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
