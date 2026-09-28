import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layouts/Layout";
import Layoutcontacto from './components/layouts/LayoutContacto' 
import ItemListContainer from "./components/products/ItemListContainer";
import DetalleProducto from "./components/products/DetalleProducto";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='contacto' element={<Layoutcontacto />} />
          <Route path="/producto/:id" element={<DetalleProducto/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App
