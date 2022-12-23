import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import DashBoard from "./Routes/Dashboard";
import Inventory from "./Routes/Inventory";
import MyProducts from "./Routes/MyProducts";
import Orders from "./Routes/Orders";
import User from "./Routes/User";
import axios from "axios";
import { ComponentsContext } from "./Contexts/components";

function App() {
  const [components, setComponents] = useState([]);
  const [orders, setOrders] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [patching, setPatching] = useState(false);

  useEffect(() => {
    axios
      .get("https://pocketstock-app.herokuapp.com/api/components")
      .then((response) => {
        setComponents(response.data);
        setPatching(false);
      });
  }, [orders, patching]);
  useEffect(() => {
    axios
      .get("https://pocketstock-app.herokuapp.com/api/orders")
      .then((response) => {
        setOrders(response.data);
        setSubmitting(false);
      });
  }, [submitting]);

  return (
    <ComponentsContext.Provider value={{ components, setComponents }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route
            path="/Inventory"
            element={<Inventory setPatching={setPatching} />}
          />
          <Route path="/Myproducts" element={<MyProducts />} />
          <Route
            path="/Orders"
            element={
              <Orders
                setSubmitting={setSubmitting}
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
          <Route path="/change-user" element={<User />} />
        </Routes>
      </div>
    </ComponentsContext.Provider>
  );
}

export default App;
