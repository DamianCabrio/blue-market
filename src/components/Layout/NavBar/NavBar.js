import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { CartWidget } from "./../../../components";
import { useCartContext } from "./../../../context/cartContext";
import { useCategoryContext } from "./../../../context/categoryContext";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { cartList } = useCartContext();
  const { getCategories } = useCategoryContext();
  let history = useHistory();

  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleOnSearch() {
    if (searchTerm !== "") {
      history.push("/search/" + searchTerm);
    }
  }

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
            <NavLink to="/" exact activeClassName="active" className="nav-link">
              Catalogo
            </NavLink>
            {!loading && (
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                {categories.map((category) => {
                  return (
                    <NavLink
                      key={category.id}
                      to={"/category/" + category.id}
                      className="dropdown-item"
                      exact
                      activeClassName="active"
                    >
                      {category.id.charAt(0).toUpperCase() +
                        category.id.slice(1)}
                    </NavLink>
                  );
                })}
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="Buscar un producto"
                className="mr-2"
                aria-label="Buscar"
                onChange={handleOnChange}
                value={searchTerm}
                required
              />
              <Button variant="outline-success" onClick={handleOnSearch}>
                Buscar
              </Button>
              {cartList.length > 0 && <CartWidget />}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
