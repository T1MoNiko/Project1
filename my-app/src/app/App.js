import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import AccountPage from "../pages/Account/AccountPage";
import Registration from "../pages/Registration/Registration";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App;
