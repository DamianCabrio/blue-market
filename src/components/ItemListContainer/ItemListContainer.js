import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
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

  useEffect(() => {
    productosPromise
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
}

export default ItemListContainer;
