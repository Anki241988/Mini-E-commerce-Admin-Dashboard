
import logo from '../assets/E-Commerce-Logo.png';
import menu from '../assets/Colapsed-menu.png';
const navBarStyles  = {

}


function Navbar() {
    return (
        <div className="nav">
            <img src={logo} alt="Logo" />
            <img src={menu} alt="menu" />

        </div>
    )
}

export default Navbar