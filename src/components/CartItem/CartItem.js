import { useCartContext } from "./../../context/cartContext";

const CartItem = ({ product, quantity }) => {
  const { addItem, removeItem, subtractItem } = useCartContext();

  function handleSubtract() {
    subtractItem(product, 1);
  }

  function handleAdd() {
    addItem(product, 1);
  }

  function handleRemove() {
    removeItem(product.id);
  }

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.title}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.imageId}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{product.titulo}</h5>
        <p className="mb-1">
          Precio total: ${product.price * quantity} (${product.price}){" "}
        </p>
      </div>
      <div className="col-sm-2 p-2 text-center ">
        <p className="mb-0">Cantidad: {quantity} </p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button
          onClick={handleAdd}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          +
        </button>

        {quantity > 1 && (
          <button
            className="btn btn-danger btn-sm mb-1"
            onClick={handleSubtract}
          >
            -
          </button>
        )}

        {quantity === 1 && (
          <button onClick={handleRemove} className="btn btn-danger btn-sm mb-1">
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
