import { CartModal } from "../../components";
import { useCartContext } from "./../../context/cartContext";

function CartSidebar({ handleCheckout, handleOnChange, formData }) {
  const { cartTotals, clear } = useCartContext();
  return (
    <div className="col-sm-3 p-3">
      <div className="card card-body">
        <p className="mb-1">Total de artículos</p>
        <h4 className=" mb-3 txt-right">{cartTotals.amount}</h4>
        <p className="mb-1">Pago total</p>
        <h3 className="m-0 txt-right">${cartTotals.total}</h3>
        <hr className="my-4" />
        <div className="text-center">
          <CartModal
            handleCheckout={handleCheckout}
            formData={formData}
            handleOnChange={handleOnChange}
          />
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
  );
}

export default CartSidebar;
