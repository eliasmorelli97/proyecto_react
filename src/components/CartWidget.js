import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css';

const CartWidget = () => {
    return (
        <>
            <FaShoppingCart />
            <span className="cartNumber">3</span>
        </>
    );
}
 
export default CartWidget;