import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <Link as={Link} to='/cart'>
            <div class='cartWidget'>
                <FaShoppingCart />
                <span className="cartNumber">3</span>
            </div>
        </Link>
    );
}
 
export default CartWidget;