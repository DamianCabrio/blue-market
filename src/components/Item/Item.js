import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imageId} />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>
            {producto.description} - ${producto.price} ({producto.categoryId})
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
