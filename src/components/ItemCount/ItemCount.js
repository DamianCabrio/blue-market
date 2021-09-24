import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useState } from 'react';

function ItemCount({ onAdd }) {
  const [ quantity, setQuantity ] = useState(1);

  function handleChange(e) {
    setQuantity(e.target.value)
  }

  function handleClick(){
    onAdd(quantity);
  }

  return (
    <InputGroup className="mb-3 w-50">
      <FormControl defaultValue="1" type="number" onChange={handleChange} />
      <Button variant="outline-success" onClick={handleClick}>
        Agregar al carrito
      </Button>
    </InputGroup>
  );
}

export default ItemCount;
