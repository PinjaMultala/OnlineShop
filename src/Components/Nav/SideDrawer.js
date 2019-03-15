import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
      </ul>
    </nav>
  );
};
export default sideDrawer;
