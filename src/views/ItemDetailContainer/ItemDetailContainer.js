import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { ItemDetail } from "../../components";

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

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  useEffect(() => {
    productosPromise
      .then((res) => {
        if (idItem) {
          res = res.find((item) => item.id === parseInt(idItem));
        }
        setItem(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idItem]);

  return (
    <>
      <Container>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) :
          item !== undefined ? (
            <ItemDetail item={item} />
          ) : (
            <h1>No se encontro el producto buscado</h1>
          )
        }
      </Container>
    </>
  );
}

export default ItemDetailContainer;
