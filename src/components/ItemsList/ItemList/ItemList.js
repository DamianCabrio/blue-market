import { Row } from "react-bootstrap";
import { Item } from "../../../components";

function ItemList({ products }) {
  return (
    <Row xs={1} s={2} md={3} xl={4} className="g-4">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </Row>
  );
}

export default ItemList;
