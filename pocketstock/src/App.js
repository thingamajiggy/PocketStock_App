import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import DashBoard from "./Routes/Dashboard";
import Inventory from "./Routes/Inventory";
import MyProducts from "./Routes/MyProducts";
import Orders from "./Routes/Orders";
import User from "./Routes/User"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Myproducts" element={<MyProducts />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/change-user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
