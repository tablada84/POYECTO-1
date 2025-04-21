import "./App.css";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/Nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        < Route path='/' element = {<ItemListContainer />} />
        <Route path = '/categoria/:categoriaId' element = {<ItemListContainer />}/>
        <Route path='/cart' element = {<Cart />}/>
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
