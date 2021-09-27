import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { CartContext } from "./context/cartContext";
import { ItemListContainer, ItemDetailContainer, Cart } from "./views";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route
            path="/category/:idCategory"
            exact
            component={ItemListContainer}
          />
          <Route path="/item/:idItem" exact component={ItemDetailContainer} />
          <Route path="/cart" exact component={Cart} />

        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
