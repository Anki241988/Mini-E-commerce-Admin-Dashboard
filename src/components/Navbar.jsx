import { Link } from "react-router-dom";

import logo from "../assets/E-commerce-Logo.png";
import menu from "../assets/Colapsed-menu.png";

function Navbar() {
  return (
    <div className="nav">

      <Link to="/">
        <img className='logo' src={logo} alt="logo" />
      </Link>

      <div className="nav-right">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>

       
      </div>
 <img src={menu} alt="menu" className="menu-icon" />
    </div>
  );
}

export default Navbar;