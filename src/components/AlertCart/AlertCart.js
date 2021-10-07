import { Alert } from "react-bootstrap";
import { useCartContext } from "./../../context/cartContext";

const message = {
  success: {
    title: "Su compra se ha realizado con exito",
    message:
      "Pronto nos estaremos comunicando con usted. Mientras tanto puede seguir mirando nuestro catalogo.",
  },
  danger: {
    title: "Ocurrio un error",
    message:
      "Por favor vuelva a intentar, si el error persiste pongase en contacto con el administrador del sitio",
  },
};

const AlertCart = ({ variation, setShow }) => {
  const { lastOrder } = useCartContext();

  return (
    <Alert variant={variation} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{message[variation].title}</Alert.Heading>
      <p>{message[variation].message}</p>
      {variation === "success" && <p>ID de orden: {lastOrder.id}</p>}
    </Alert>
  );
};

export default AlertCart;
