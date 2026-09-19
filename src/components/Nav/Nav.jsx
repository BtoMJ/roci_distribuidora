import { NavLink, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import { FaCartShopping } from "react-icons/fa6";
import CartIcon from "../CardIcon/CardIcon";
import logo from "../../assets/LogoRoci.png";
import "./Nav.css";

function Nav() {
  const { pathname } = useLocation();
  const items = useCartStore((state) => state.items);

  return (
    <nav className={pathname !== "/" ? "nav-container" : "no-visible"}>
      <div className="items-nav">
        <div className="nav-logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <NavLink
          to={items.length > 0 ? "/cart" : "/catalog"}
          className="nav-cart"
        >
          <CartIcon />
          <FaCartShopping
            className={items.length > 0 ? "items-cart" : "no-items-cart"}
          />
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
