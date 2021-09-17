import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { ItemListContainer, ItemDetailContainer } from "./views";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={ItemListContainer} /> 
        <Route path='/category/:idCategory' exact component={ItemListContainer} /> 
        <Route path='/item/:idItem' exact component={ItemDetailContainer} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
