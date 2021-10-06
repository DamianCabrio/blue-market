import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { ItemList } from "../../components";
import { useProductContext } from "../../context/productContext";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory, query } = useParams();
  const { getProducts, getProductsByCategory,getProductsByQuery } = useProductContext();

  useEffect(() => {
    document.title = "Catalogo Blue Market";
    setLoading(true);
    if (idCategory) {
      document.title = idCategory + " - Blue Market";
      getProductsByCategory(idCategory)
        .then((res) => {
          setProducts(res);
        })
        .finally(() => setLoading(false));
    } else if (query) {
      document.title = query + " - Blue Market";
      getProductsByQuery(query).then((res) => {
        setProducts(res);
      })
      .finally(() => setLoading(false));
    } else {
      getProducts()
        .then((res) => {
          setProducts(res);
        })
        .finally(() => setLoading(false));
    }
  }, [idCategory, query, getProducts, getProductsByCategory,getProductsByQuery]);

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
        ) : products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <h3>No se encontraron productos con esta categoria</h3>
        )}
      </Container>
    </>
  );
}

export default ItemListContainer;
