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
  // Acceso a un documento específico -> detail
  useEffect(() => {
    // Obtenemos la base de datos
    const db = getFirestore();

    // Obtener referencia al documento
    const itemReference = doc(db, 'items', 'yXBWQWLFmCWRyA7LIMMv');

    // Obtener el documento a partir de la referencia
    getDoc(itemReference)
      .then((snapshot) => {
        // Preguntamos si el documento existe
        if (snapshot.exists) {
          // Armamos un objeto literal con el id y los demas campos del documento
          const item = {
            id: snapshot.id,
            ...snapshot.data()
          };
        }

      })
      .catch(error => console.warn(error))
  }, []);

  // Acceso a una coleccion de documentos -> list
  useEffect(() => {
    // Obtenemos la base de datos
    const db = getFirestore();

    // Obtenemos la referencia a la colleccion 'items'
    const collectionReference = collection(db, 'items');

    // Obtenemos los datos a partir de la referencia
    getDocs(collectionReference)
      .then((snapshot) => {
        // Armamos un listado de objetos literales con los id y los demas campos de cada documento
        const list = snapshot
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
      })
      .catch(error => console.warn(error))
  }, []);

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
