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
                <li className="navbar-list-items"> <Link to='/' key={'1'}> Dashboard </Link>  </li>
                <li className="navbar-list-items"><Link to='/Inventory' key={'2'}> Inventory </Link> </li>
                <li className="navbar-list-items"> <Link to='/MyProducts' key={'3'}> My Products </Link> </li>
                <li className="navbar-list-items"> <Link to='/Orders' key={'4'}> Orders </Link> </li>
            </ul>

        </div>
    )
}

export default NavBar;