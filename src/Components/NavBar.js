import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "./icon.svg";
import CartBascet from "./CartBascet.svg";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">
            <img
              src={icon}
              alt="store"
              style={{ width: "30%", height: "auto" }}
            />
          </Link>

          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>

          <Link to="/cart" style={{ width: "50%", height: "auto" }}>
            <button>
              <a href="#">
                <img src={CartBascet} style={{ width: "20%", height: "20%" }} />
                My Cart
              </a>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
