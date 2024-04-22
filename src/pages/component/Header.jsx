import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './HFstyle.scss'

export default function Header() {

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
            <div className='logo'>
                <img src="/static/nav_logo.jpeg" className='br-50' width="70" alt="Logo" />
                <Navbar.Brand href="#home">Samrat Low Firm</Navbar.Brand>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="links_container dfdr">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#features">Services</Nav.Link>
                <Nav.Link href="#features">Updates</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
              </div>
                    
                 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  )
}


