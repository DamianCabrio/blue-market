import { Alert } from "react-bootstrap";

const AlertCart = ({ variation, setShow }) => {
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

  return (
    <Alert variant={variation} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{message[variation].title}</Alert.Heading>
      <p>{message[variation].message}</p>
    </Alert>
  );
};

export default AlertCart;
