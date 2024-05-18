import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">SOCIFILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#furious">FURIOUS</Nav.Link>
            <Nav.Link href="#horror">HORROR</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
