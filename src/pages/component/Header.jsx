import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='w-100'>
        <Container>
          <Nav className="me-auto w-100 dfdr ac sb">
            <div className='logo'>
              <img src="/static/nav_logo.jpeg" className='br-50' width="70" alt="Logo" />
              <Navbar.Brand href="#home">Samrat Low Firm</Navbar.Brand>
            </div>
            <div className="links_container dfdr">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#features">Updates</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}