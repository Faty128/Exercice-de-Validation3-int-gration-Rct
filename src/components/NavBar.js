import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import React from 'react'
import img1 from '../assets/img/fatima.png';
import img2 from "../assets/img/Vector 1.png";
import img3 from "../assets/img/Vector 2.png";

export default function NavBar() {
  return (
    <div>
  <header className='header-section1'>
    <div className="navbar">
    <Navbar collapseOnSelect expand="lg" className="bodynav">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#aceuil" className='acceuil'>ACCEUIL</Nav.Link>
            <Nav.Link href="#presentation">PRESENTATION</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#compétences">COMPETENCES</Nav.Link>
            <Nav.Link href="#expériences">EXPERIENCES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className="div-section">
      <Container fluid className='boder'>
        <Row>
          <Col md={8} xs={12}>
            <h1 className='text-start first-h1'>Hello! Je suis <span> FATY NIANG </span> <br />
            Développeuse backend à Bakéli</h1>
            <div className="icone-contact p-4 d-flex">
            <div className="icone1 d-flex">
            <i class="fa fa-mobile" aria-hidden="true"></i>
            <p>76 555 64 97</p>
            </div>
            <div className="icone2 d-flex">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <p>fatyniang128@gmail.com</p>
            </div>
            <div className="icone3 d-flex">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Sébikotane</p>
            </div>
            <div className="icone4 d-flex">
              <i class="fa fa-university" aria-hidden="true"></i>
            <p>Volkeno</p>
            </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <img src={img1} alt="" className='img-fluid img-fatima' />
          </Col>
        </Row>
      </Container>
        
    </div>
  </header>
      <div  className="img-vectore">
          <img src={img2} alt="" className='img-fluid vector1' />
          <img src={img3} alt="" className='img-fluid vector2'/>
      </div>
    </div>
  );
}
