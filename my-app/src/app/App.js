import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App;
