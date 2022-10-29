import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product, showDescription , showDetailButton }) => {
  return (
    <Card className='cardItem'>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>
          {product.title}
        </Card.Title>
        {showDescription && (
          <Card.Text >
            {product.description}
          </Card.Text>
        )}
        <Card.Text>
          $ {product.price}
        </Card.Text>
        {showDetailButton && (
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">
              Ver detalle
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}
 
export default Item;