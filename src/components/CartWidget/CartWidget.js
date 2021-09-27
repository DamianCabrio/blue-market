import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from './../../context/cartContext';

function CartWidget() {
  const { cartTotals } = useCartContext();

  return (
    <Link to="/cart">
      <img
        src="/img/shopping-cart.svg"
        alt="Carrito"
        width="25px"
        className="carrito"
      />
      <Badge bg="primary">{cartTotals.amount}</Badge>
    </Link>
  );
}

export default CartWidget;
