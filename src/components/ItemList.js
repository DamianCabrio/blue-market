import { Row } from "react-bootstrap";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <Row xs={1} s={2} md={3} xl={4} className="g-4">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </Row>
  );
}

export default ItemList;
