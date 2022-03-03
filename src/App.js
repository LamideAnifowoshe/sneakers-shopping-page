import NavBar from "./components/NavBar";
import CarouselItem from "./components/CarouselItem";
import Container from "react-bootstrap/Container";
import Sneakers from "./components/Sneakers;
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col sm={6}>
            <CarouselItem />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
