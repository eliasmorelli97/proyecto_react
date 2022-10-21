import { useContext } from "react";
import { Container } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  console.log({cart, total});

  return (
    <Container>
      <h1>Carrito de Compras</h1>
    </Container>
  );
}

export default Cart