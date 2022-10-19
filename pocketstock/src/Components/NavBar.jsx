import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/NavBar.css";
import Logo from "../Assets/pocketstocklogo.png";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import { BsFillSquareFill } from "react-icons/bs";
import { ComponentsContext } from "../Contexts/components";
const NavBar = () => {
  const { components } = useContext(ComponentsContext);

  let inventory = "";
  let redCount = 0;
  let yellowCount = 0;

  components.forEach((component) => {
    if (
      component.stockLevel > 0 &&
      component.stockLevel < component.triggerPoint
    ) {
      yellowCount++;
    } else if (component.stockLevel < 0) {
      redCount++;
    }
  });

  if (yellowCount > 0 && redCount > 0) {
    inventory = (
      <li className="navbar-list-items">
        <Link to="/Inventory" key={"2"}>
          {" "}
          Inventory <BsFillSquareFill id="yellow" />{" "}
          <BsFillSquareFill id="red" />{" "}
        </Link>{" "}
      </li>
    );
  } else if (yellowCount > 0 && redCount === 0) {
    inventory = (
      <li className="navbar-list-items" id="inventory">
        <Link to="/Inventory" key={"2"}>
          {" "}
          Inventory <BsFillSquareFill id="yellow" />{" "}
        </Link>{" "}
      </li>
    );
  } else if (yellowCount === 0 && redCount > 0) {
    inventory = (
      <li className="navbar-list-items">
        <Link to="/Inventory" key={"2"}>
          {" "}
          Inventory <BsFillSquareFill id="red" />{" "}
        </Link>{" "}
      </li>
    );
  } else {
    inventory = (
      <li className="navbar-list-items">
        <Link to="/Inventory" key={"2"}>
          {" "}
          Inventory{" "}
        </Link>{" "}
      </li>
    );
  }

  return (
    <div className="Header">
      <div className="navContainer">
        <div className="pocketStockLogo">
          <Link to="/">
            {" "}
            <img src={Logo} className="logo" />{" "}
          </Link>
        </div>
        <div className="navListContainer">
          <ul className="navbar-list">
            {inventory}
            <li className="navbar-list-items">
              {" "}
              <Link to="/MyProducts" key={"3"}>
                {" "}
                My Products{" "}
              </Link>{" "}
            </li>
            <li className="navbar-list-items">
              {" "}
              <Link to="/Orders" key={"4"}>
                {" "}
                Orders{" "}
              </Link>{" "}
            </li>
            <li className="navbar-list-items" id="user">
              {" "}
              <Link to="/change-user">
                <FaRegUser />
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
