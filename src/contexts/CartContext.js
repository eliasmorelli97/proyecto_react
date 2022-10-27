import { createContext, useState } from "react";

const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
            const item = {
                ...product,
                quantity
            };
            setCart([...cart, item]);
        } else {
            // Busca el item en el carrito, en el array,
            // su ubicacion para despues poder actualizar este item
            const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
            // Creo un borrador del item para poder modificarlo
            // evitando la modificacion del estado de react
            const itemDraft = {...cart[itemIndex]};
            // Actualizo la quantity en el borrador
            itemDraft.quantity = itemDraft.quantity + quantity;
            // Creo un borrador del carrito para poder actualizar el item
            const cartDraft = [...cart];
            // Actualizo el carrito borrador, sin tocar el estado react
            cartDraft[itemIndex] = itemDraft;
            setCart(cartDraft);
        }
    }

    const removeItem = (itemId) => {
        const cartDraft = cart.filter((item) => item.id !== itemId);
        setCart(cartDraft);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));

    const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);

    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, total, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
};