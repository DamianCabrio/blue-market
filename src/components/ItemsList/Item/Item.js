import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" src={product.imageId} />
        <Card.Body>
          <Card.Title>
            {product.title}{" "}
            {product.stock === 0 && (
              <span className="text-danger"> Sin stock</span>
            )}
          </Card.Title>
          <Card.Text>
            {product.description} - ${product.price} ({product.categoryId})
          </Card.Text>
          <Link to={"/item/" + product.id}>
            <Button variant="primary">Mas info</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
