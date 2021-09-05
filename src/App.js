import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import "./App.css";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { width } from "dom-helpers";

const productosArray = [
  {
    id: 1,
    titulo: "IPhone 12",
    descripcion: "Uno de los mejores smartphones de la actualidad",
    precio: 208999.0,
    imagen: "https://www.macstation.com.ar/img/productos/small/2152-1.jpg",
  },
  {
    id: 2,
    titulo: "Notebook Hp 250 I7 1065g7 16gb 1tb + Ssd 240gb 15.6 W10 Pro",
    descripcion: "Gran computadora para trabajo o juegos",
    precio: 155795.25,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_613206-MLA44385042469_122020-O.webp",
  },
  {
    id: 3,
    titulo: "Impresora simple función Xerox Phaser 3020/BI",
    descripcion: "Impresora WIFI para el hogar",
    precio: 14999,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_933053-MLA41241337999_032020-O.webp",
  },
  {
    id: 4,
    titulo: "Auriculares gamer Redragon Zeus",
    descripcion: "Auriculares con gran sonido",
    precio: 8094,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_666268-MLA40762447115_022020-O.webp",
  },
  {
    id: 5,
    titulo: "Silla de escritorio Desillas pro gamer momentum gamer",
    descripcion: "Silla comoda para se usada por horas",
    precio: 25380,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_996964-MLA43636553592_092020-O.webp",
  },
];

const productosPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (productosArray.length > 0) {
      resolve(productosArray);
    } else {
      reject("Error: Array de productos vacio");
    }
  }, 2000);
});

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productosPromise
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Blue Market Inicio</h1>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <ItemList productos={productos} />
        )}
      </Container>
    </div>
  );
}

export default App;
