import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>
            {producto.descripcion} - ${producto.precio} ({producto.categoria})
          </Card.Text>
          <Link to={"/item/" + producto.id}>
            <Button variant="primary">Mas info</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
