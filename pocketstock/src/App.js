import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import DashBoard from "./Routes/Dashboard";
import Inventory from "./Routes/Inventory";
import MyProducts from "./Routes/MyProducts";
import Orders from "./Routes/Orders";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Myproducts" element={<MyProducts />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
