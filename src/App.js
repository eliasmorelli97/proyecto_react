import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/proyecto_react'>
        <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenido a Hardware Knights'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido a Hardware Knights'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />      
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
