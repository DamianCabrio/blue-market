import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { ItemList } from "../../components";
import { useProductContext } from "../../context/productContext";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory, query } = useParams();
  const { getProducts, getProductsByCategory, getProductsByQuery } =
    useProductContext();

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
    } else {
      getProducts()
        .then((res) => {
          let resProducts = res;
          if (query) {
            resProducts = res.filter((item) =>
              item.title.toLowerCase().includes(query.toLowerCase())
            );
          }
          setProducts(resProducts);
        })
        .finally(() => setLoading(false));
    }
  }, [
    idCategory,
    query,
    getProducts,
    getProductsByCategory,
    getProductsByQuery,
  ]);

  return (
    <>
      <Container className="pb-5">
        <h1 className="py-4">Bienvenido a Blue Market ¿Que va a buscar hoy?</h1>
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
          <h3>
            No se encontraron productos {idCategory && "con esta categoria"}{" "}
            {query && "con esta consulta"}{" "}
          </h3>
        )}
      </Container>
    </>
  );
}

export default ItemListContainer;
