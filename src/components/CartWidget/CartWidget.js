import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import './CartWidget.css';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <>
            <Link as={Link} to='/cart'>
                <FaShoppingCart />
            </Link>
            {totalQuantity > 0 && (
                <Badge pill bg="danger">{totalQuantity}</Badge>
            )}
        </>
    );
}
 
export default CartWidget;