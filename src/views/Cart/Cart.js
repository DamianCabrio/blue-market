import { Timestamp } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AlertCart, CartProducts, CartSidebar } from "../../components";
import { useCartContext } from "./../../context/cartContext";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
};

function Cart() {
  const { cartList, cartTotals, saveOrder } = useCartContext();
  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertVariation, setAlertVariation] = useState("");

  useEffect(() => {
    document.title = "Carrito - Blue Market";
  }, []);

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);
    let order = {};
    order.date = Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.total = cartTotals.total;
    order.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.quantity;
      return { id, title, price };
    });
    saveOrder(order).then((res) => {
      if (res) {
        setAlertVariation("success");
      } else {
        setAlertVariation("danger");
      }
      setShowAlert(true);
      setLoading(false);
    });
    setFormData(initialFormData);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <h3 className="mt-4">Procesando compra...</h3>
        </div>
      ) : (
        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {showAlert && (
              <AlertCart setShow={setShowAlert} variation={alertVariation} />
            )}
            {cartList.length > 0 ? (
              <CartProducts cartList={cartList} />
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
            <CartSidebar
              handleCheckout={handleCheckout}
              handleOnChange={handleOnChange}
              formData={formData}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
