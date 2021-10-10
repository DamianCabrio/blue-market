import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "./../../../context/cartContext";
import { ItemCount } from "./../../../components";

function ItemDetail({ item }) {
  const [showItemCount, setShowItemCount] = useState(true);
  const [showError, setshowError] = useState(false);

  const { addItem } = useCartContext();

  function onAdd(quantityToAdd) {
    const quantity = parseInt(quantityToAdd);
    if (quantityToAdd <= item.stock && Number.isInteger(quantity)) {
      const isAdded = addItem(item, quantity);
      if (isAdded) {
        setshowError(false);
        setShowItemCount(false);
      } else {
        setshowError(true);
      }
    } else {
      setshowError(true);
    }
  }

  return (
    <div className="card mb-3" style={{ width: "100%", marginTop: "30px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.imageId} width="100%" height="100%" alt={item.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <small className="text-muted">
                Categoria: {item.categoryId} - Precio: $ {item.price} - Stock:{" "}
                {item.stock}
              </small>
            </p>
            {showError && (
              <p className="text-danger">
                Por favor, elige una cantidad de stock valida
              </p>
            )}
            {item.stock > 0 ? (
              showItemCount ? (
                <ItemCount onAdd={onAdd} max={item.stock} />
              ) : (
                <Link to="/cart">
                  <Button className="d-block mb-3 mt-3">Ir al carrito</Button>
                </Link>
              )
            ) : (
              <h3 className="text-danger">No hay stock</h3>
            )}
            <Link to={"/"}>
              <Button variant="primary">Volver a inicio</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
