import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "./../../context/cartContext";
import CartWidget from "./../CartWidget/CartWidget";


function NavBar() {
  const { cartList } = useCartContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Blue Market</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Catalogo
            </Link>
            <Link to="/ofertas" className="nav-link">
              Ofertas
            </Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <Link to="/category/celulares" className="dropdown-item">
                Celulares
              </Link>
              <Link to="/category/computadoras" className="dropdown-item">
                Computadora
              </Link>
              <Link to="/category/perifericos" className="dropdown-item">
                Perifericos
              </Link>
              <Link to="/category/sillas" className="dropdown-item">
                Sillas
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
              {cartList.length > 0 && <CartWidget />}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
