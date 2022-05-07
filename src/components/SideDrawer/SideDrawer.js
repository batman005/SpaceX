import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";
const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <img src="/images/side.jpg" alt="sidebar" id="sidebar-image" />
        <div id="sidebar-head">
          <h3>SpaceX</h3>
        </div>
        <Link to="/">
          <li>
            <img
              src="/icons/home.svg"
              alt="arrow"
              aria-hidden="true"
              className="right-arrow"
            />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/launches">
          <li>
            <img
              src="/icons/database.svg"
              alt="arrow"
              aria-hidden="true"
              className="right-arrow"
            />
            <p>Launches</p>
          </li>
        </Link>
        <h6 id="copyright-msg">Made With 🖤 by SpaceX </h6>
      </ul>
    </nav>
  );
};

export default sideDrawer;
