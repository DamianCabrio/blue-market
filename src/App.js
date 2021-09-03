import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1>Blue Market Inicio</h1>
      </Container>
    </div>
  );
}

export default App;
