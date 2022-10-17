import React from "react";
import { Link } from "react-router-dom";
import '../StyleSheets/NavBar.css'
import Logo from '../Assets/pocketstocklogo.png'
const NavBar = () => {
    return (
        <div className="Header">
        <div className="navContainer"> 
            <div className="pocketStockLogo">
            <Link to='/'> <img src={Logo} className='logo'/> </Link>  
            </div>
            <div className="navListContainer">
            <ul className="navbar-list">
                <li className="navbar-list-items"><Link to='/Inventory' key={'2'}> Inventory </Link> </li>
                <li className="navbar-list-items"> <Link to='/MyProducts' key={'3'}> My Products </Link> </li>
                <li className="navbar-list-items"> <Link to='/Orders' key={'4'}> Orders </Link> </li>
            </ul>
            </div>

        </div>
        </div>
    )
}

export default NavBar;