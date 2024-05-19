import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center h-100">
        <Row>
          <Col>
            <div className="title">NONTON DISINI GRATIS</div>
            <div className="title">DOMPET GABAKALAN NANGIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">TONTON SEKARANG JUGA!!!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
