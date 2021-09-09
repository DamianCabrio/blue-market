import { Button, Card, Col } from "react-bootstrap";

function Item({ producto }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>
            {producto.descripcion} - ${producto.precio}
          </Card.Text>
          <Button variant="primary">Mas info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
