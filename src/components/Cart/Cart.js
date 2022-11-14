import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";
import "./Cart.css";

const Cart = () => {
  const { cart, total, removeItem, clear, buyer } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [orderId, setOrderId] = useState();
  
  const handleRemove = (itemId) => {
    removeItem(itemId)
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleLoading = () => setShowLoading(true);

  const handleClear = () => {
    clear();
  }

  const handleBuy = async () => {
    let todayDate = new Date();
    todayDate = todayDate.toLocaleDateString();
    handleLoading();

    const newOrder = {
      buyer: buyer,
      items: cart,
      total,
      date: todayDate
    };
    const newOrderId = await createOrder(newOrder);
    setShowLoading(false);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className="cartContainer">
      <h1>Carrito de Compras</h1>
      {showTable && 
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td><FaTrashAlt onClick={() => handleRemove(item.id)} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ${total}</h3>
          <div className="buttonsContainer">
            <Button variant="danger" onClick={handleClear}>Vaciar Carrito</Button>
            <Button variant="success" onClick={handleOpen}>Realizar compra</Button>
          </div>
        </>
      }
      {!showTable && (
        <>
          <h3>Carrito de compras vacio</h3>
          <Link to="/">
            <Button variant="success">Ver productos</Button>
          </ Link>
        </>
      )}
      <OrderModal 
        showModal={showModal} 
        showLoading={showLoading} 
        onClose={handleClose} 
        onBuy={handleBuy} 
        orderId={orderId} 
        cart={cart} 
        total={total}
      />
    </Container>
  );
}

export default Cart