import { useCartContext } from "./../../../context/cartContext";
import { CartItem } from "./../../../components";

const CartProducts = () => {
  const { cartList } = useCartContext();

  return (
    <div className="card card-body border-0">
      {cartList.map((product, index) => (
        <CartItem
          key={product.item.id}
          product={product.item}
          quantity={product.quantity}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default CartProducts;