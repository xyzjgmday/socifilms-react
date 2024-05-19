import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar variant="light" bg={isScrolled ? "fixed" : "transparent"} className={isScrolled ? "fixed-top" : ""}>
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
  );
}

export default NavigationBar;
