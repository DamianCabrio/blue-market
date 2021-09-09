import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import { ItemListContainer, NavBar } from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1>Blue Market Inicio</h1>
        <ItemListContainer />
      </Container>
    </div>
  );
}

export default App;
