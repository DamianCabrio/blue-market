import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Blue Market</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#link">Catalogo</Nav.Link>
            </Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <Link to="/category/celulares">
                <NavDropdown.Item href="#link">Celulares</NavDropdown.Item>
              </Link>
              <Link to="/category/computadoras">
                <NavDropdown.Item href="#link">Computadora</NavDropdown.Item>
              </Link>
              <Link to="/category/perifericos">
                <NavDropdown.Item href="#link">Perifericos</NavDropdown.Item>
              </Link>
              <Link to="/category/sillas">
                <NavDropdown.Item href="#link">Sillas</NavDropdown.Item>
              </Link>
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
