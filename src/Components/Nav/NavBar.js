import React from "react";
import "./NavBar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { Link } from "react-router-dom";
import CartBascet from "./READY_cart.svg";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_togle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">K-BEAUTY</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navgation-items">
        <ul>
          <li>
            <a href="/makeup">MAKEUP</a>
          </li>
          <li>
            <a href="/skincare">SKINCARE</a>
          </li>
          <li>
            <a href="/brand">BRAND</a>
          </li>
          <li>
            <a href="/hair">HAIR</a>
          </li>

          <Link to="/cart" style={{ width: "50%", height: "auto" }}>
            <button>
              <a href="#">
                <img src={CartBascet} style={{ width: "20%", height: "20%" }} />
                My Cart
              </a>
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  </header>
);
export default toolbar;
