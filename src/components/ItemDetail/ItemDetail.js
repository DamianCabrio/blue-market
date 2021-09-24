import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "./../ItemCount";
import { useCartContext } from './../../context/cartContext';

function ItemDetail({ item }) {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useCartContext();

  function onAdd(quantityToAdd) {
    setShowItemCount(false);
    addItem(item, parseInt(quantityToAdd));
  }

  return (
    <div className="card mb-3" style={{ width: "100%", marginTop: "30px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.imagen} width="100%" height="100%" alt={item.titulo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.titulo}</h5>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">
              <small className="text-muted">
                Categoria: {item.categoria} - Precio: $ {item.precio}
              </small>
            </p>
            {showItemCount ? (
              <ItemCount onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <Button className="d-block mb-3 mt-3">Ir al carrito</Button>
              </Link>
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
