import Item from "./Item";
import './ItemList.css';

const ItemList = ({ products = [] }) => {
  return (
    <div className="itemList">
      {products.map((product) => (
        <Item key={product.id} product={product} showDescription={false} showDetailButton={true} />
      ))}
    </div>
  );
}
 
export default ItemList;