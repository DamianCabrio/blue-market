import {
  Button, Container, Form,
  FormControl, Nav, Navbar, NavDropdown
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">Blue Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#catalogo">Catalogo</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#tecnologia">Tecnologia</NavDropdown.Item>
              <NavDropdown.Item href="#hogar">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="#deportes">Deportes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar un producto"
                  className="mr-2"
                  aria-label="Buscar"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
              <img
                src="/img/shopping-cart.svg"
                alt="Carrito"
                width="25px"
                className="carrito"
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
