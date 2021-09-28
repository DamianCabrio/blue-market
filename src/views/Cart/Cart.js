import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartProducts from "./../../components/CartProducts/index";
import { useCartContext } from "./../../context/cartContext";

function Cart() {
  const { cartList, cartTotals, clear } = useCartContext();

  return (
    <>
      <div className="row no-gutters justify-content-center">
        <div className="col-sm-9 p-3">
          {cartList.length > 0 ? (
            <CartProducts />
          ) : (
            <div className="p-3 text-center text-muted">
              <p>Su carrito está vacío</p>
              <Link to="/">
                <Button>Ir al catalogo</Button>
              </Link>
            </div>
          )}
        </div>
        {cartList.length > 0 && (
          <div className="col-sm-3 p-3">
            <div className="card card-body">
              <p className="mb-1">Total de artículos</p>
              <h4 className=" mb-3 txt-right">{cartTotals.amount}</h4>
              <p className="mb-1">Pago total</p>
              <h3 className="m-0 txt-right">${cartTotals.total}</h3>
              <hr className="my-4" />
              <div className="text-center">
                <button type="button" className="btn btn-primary mb-2">
                  TERMINAR COMPRA
                </button>
                <button
                  type="button"
                  className="btn btn-outlineprimary btn-sm"
                  onClick={clear}
                >
                  LIMPIAR CARRITO
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
