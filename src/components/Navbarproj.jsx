import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarproj() {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <div >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Produtos">Aulas</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Navbarproj;