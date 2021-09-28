import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { ItemList } from "../../components";
import { useProductContext } from "../../context/productContext";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();
  const { getProducts, getProductsByCategory } = useProductContext();

  useEffect(() => {
    setLoading(true)
    if (idCategory) {
      getProductsByCategory(idCategory)
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
    } else {
      getProducts()
        .then((res) => {
          setProductos(res);
        })
        .catch((err) => console.log(err))
        .then(() => setLoading(false));
    }
  }, [idCategory, getProducts, getProductsByCategory]);

  return (
    <>
      <Container>
        <h1>Blue Market Inicio</h1>
        {idCategory ? <h3>Categoria {idCategory}</h3> : ""}
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <h3>No se encontraron productos con esta categoria</h3>
        )}
      </Container>
    </>
  );
}

export default ItemListContainer;
