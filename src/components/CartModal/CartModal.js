import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const CartModal = ({ handleCheckout, formData, handleOnChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowModal(false);
      handleCheckout(event);
    }
    setValidated(true);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={handleShowModal}
      >
        TERMINAR COMPRA
      </button>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ingrese sus datos para terminar la compra</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@ejemplo.com"
                value={formData.name}
                name="name"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@ejemplo.com"
                value={formData.email}
                name="email"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="2996982252"
                value={formData.phone}
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                name="phone"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button type="submit">Comprar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CartModal;
