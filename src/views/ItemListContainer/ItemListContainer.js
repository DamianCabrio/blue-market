import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner, Container } from "react-bootstrap";
import { ItemList } from "../../components";

const productosArray = require("../../data/productosArray.json");

const productosPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (productosArray.length > 0) {
      resolve(productosArray);
    } else {
      reject("Error: Array de productos vacio");
    }
  }, 2000);
});

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    productosPromise
      .then((res) => {
        if (idCategory) {
          res = res.filter((produc) => produc.categoria === idCategory);
        }

        setProductos(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <>
      <Container>
        <h1>Blue Market Inicio</h1>
        { idCategory ? (
        <h3>Categoria {idCategory}</h3> 
        ) : "" }
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : productos.length > 0 ? (
          <ItemList productos={productos} />
        ) :
          <h3>No se encontraron productos con esta categoria</h3>
        }
      </Container>
    </>
  );
}

export default ItemListContainer;
