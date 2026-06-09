import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaXmark, FaBars, FaCartShopping } from "react-icons/fa6";
import CartIcon from "../CardIcon/CardIcon";
import logo from "../../assets/LogoRoci.png";
import "./Nav.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenWidth = window.innerWidth;
  return (
    <nav className="nav-container">
      {screenWidth < 768 && (
        <>
          <div className="nav-logo-mobile">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <NavLink to="/cart" className="nav-cart-mobile">
            <CartIcon />
            <FaCartShopping />
          </NavLink>
          <div className="menu-nav-mobile">
            {isMenuOpen ? (
              <FaXmark
                className="menu-open"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="menu-close"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        </>
      )}

      {/* <div className="nav-menu">
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#products">Productos</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Nav;
