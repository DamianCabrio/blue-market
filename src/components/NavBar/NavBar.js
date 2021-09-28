import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
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
import { useCartContext } from "./../../context/cartContext";
import { useCategoryContext } from "./../../context/categoryContext";
import CartWidget from "./../CartWidget/CartWidget";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cartList } = useCartContext();
  const { getCategories } = useCategoryContext();

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
  }, [getCategories]);

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
            {!loading && (
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                {categories.map((category) => {
                  return (
                    <Link
                      key={category.id}
                      to={"/category/" + category.id}
                      className="dropdown-item"
                    >
                      {category.id.charAt(0).toUpperCase() + category.id.slice(1)}
                    </Link>
                  );
                })}
              </NavDropdown>
            )}
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
