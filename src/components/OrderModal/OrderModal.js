import { useContext, useState } from "react";
import { Alert, Button, Card, Form, Modal, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import './OrderModal.css';

const OrderModal = ({ showModal, showLoading, onClose, onBuy, orderId, cart, total }) => {
  const { buyer, setBuyer } = useContext(CartContext);

  const handleName = (event) => {
    setBuyer({
      ...buyer,
      name: event.target.value
    });
  }

  const handleSurname = (event) => {
    setBuyer({
      ...buyer,
      surname: event.target.value
    });
  }

  const handlePhone = (event) => {
    setBuyer({
      ...buyer,
      phone: event.target.value
    });
  }

  const handleEmail = (event) => {
    setBuyer({
      ...buyer,
      email: event.target.value
    });
  }

  const handleRepeatEmail = (event) => {
    setBuyer({
      ...buyer,
      repeatEmail: event.target.value
    });
  }
  
  const isDisabled = buyer.name === '' || buyer.phone === '' || buyer.email === '' || buyer.repeatEmail === '' || buyer.email !== buyer.repeatEmail;

  return (
      <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar compra</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <div className="cartDetail">
          <Card>
            <Card.Body>
              <Card.Title>
                Detalle del carrito
              </Card.Title>
              {cart.map((product) => (
                <Card.Text key={product.id}>
                  {product.title} x {product.quantity}
                </Card.Text>
              ))}
              <Card.Text>
                Total: ${total}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="cartForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" field="name" onChange={handleName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido" field="name" onChange={handleSurname} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su telefono" field="phone" onChange={handlePhone} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" field="email" onChange={handleEmail} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Repetir email</Form.Label>
            <Form.Control type="email" placeholder="Repita su email" field="repeatEmail" onChange={handleRepeatEmail} />
          </Form.Group>
        </div>
      </Modal.Body>
      <Modal.Footer>
          {!orderId && (
              <>
                  <Button variant="secondary" onClick={onClose}>
                      Cancelar
                  </Button>
                  <Button variant="primary" disabled={isDisabled} onClick={onBuy}>
                      Realizar compra
                  </Button>
              </>
          )}
          {showLoading && (
            <Spinner animation="border" variant="success" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {orderId && (
              <div className="footerOrderSuccess">
                  <Alert key='success' variant='success'>
                      El ID de tu orden es: {orderId}
                  </Alert>
                  <Link to='/'>
                      <Button variant="success">
                          Seguir comprando
                      </Button>
                  </Link>
              </div>
          )}
      </Modal.Footer>
    </Modal>
  )
}

export default OrderModal;