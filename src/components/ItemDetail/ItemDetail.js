import Item from "../ItemList/Item"
import { useState } from "react";
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(value);
  };

  return (
    <div className="itemDetail">
      <div>
        <Item product={product} />
      </div>
      <div>
        <button onClick={() => handleClick(count - 1)}>-</button>
        <h4>Cantidad de click {count}</h4>
        <button onClick={() => handleClick(count + 1)}>+</button>
      </div>
    </div>
  );
}
 
export default ItemDetail;