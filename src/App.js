import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { CartContext } from "./context/cartContext";
import { CategoriesContext } from "./context/categoryContext";
import { ProductContext } from "./context/productContext";
import { Cart, ItemDetailContainer, ItemListContainer } from "./views";

function App() {
  return (
    <ProductContext>
      <CartContext>
        <BrowserRouter>
          <CategoriesContext>
            <NavBar />
          </CategoriesContext>
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route
              path="/category/:idCategory"
              exact
              component={ItemListContainer}
            />
            <Route path="/search/:query" exact component={ItemListContainer} />
            <Route path="/item/:idItem" exact component={ItemDetailContainer} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContext>
    </ProductContext>
  );
}

export default App;
