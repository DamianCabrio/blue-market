import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "./../../../context/cartContext";

function CartWidget() {
  const { cartTotals } = useCartContext();

  return (
    <Link to="/cart" className="d-grid" id="cartContainer">
      <img src="/img/shopping-cart.svg" alt="Carrito" width="25px" />
      <Badge bg="primary">{cartTotals.amount}</Badge>
    </Link>
  );
}

export default CartWidget;
