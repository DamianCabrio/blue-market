import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function ItemCount({ onAdd, max }) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  function handleClick() {
    onAdd(quantity);
  }

  return (
    <InputGroup className="mb-3 w-75">
      <FormControl
        defaultValue="1"
        min="1"
        max={max}
        type="number"
        onChange={handleChange}
      />
      <Button variant="outline-success" onClick={handleClick}>
        Agregar al carrito
      </Button>
    </InputGroup>
  );
}

export default ItemCount;
