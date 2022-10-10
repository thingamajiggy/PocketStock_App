import React from "react";
import { Link } from "react-router-dom";
import '../StyleSheets/NavBar.css'

const NavBar = () => {
    return (
        <div> 
            <div>
            <Link to='/'> LogoHere </Link>  
            </div>
            <ul className="navbar-list">
                <li className="navbar-list-items"> <Link to='/'> Dashboard </Link>  </li>
                <li className="navbar-list-items"><Link to='/Inventory'> Inventory </Link> </li>
                <li className="navbar-list-items"> <Link to='/MyProducts'> My Products </Link> </li>
                <li className="navbar-list-items"> <Link to='/Orders'> Orders </Link> </li>
            </ul>

        </div>
    )
}

export default NavBar;