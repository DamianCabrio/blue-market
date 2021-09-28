import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { ItemDetail } from "../../components";
import { useProductContext } from "./../../context/productContext";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProductById } = useProductContext();
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true)
    getProductById(idItem)
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
  }, [idItem, getProductById]);

  return (
    <>
      <Container>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : item !== undefined ? (
          <ItemDetail item={item} />
        ) : (
          <h1>No se encontro el producto buscado</h1>
        )}
      </Container>
    </>
  );
}

export default ItemDetailContainer;
