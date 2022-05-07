import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import "./Toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/" style={{ textDecoration: "none", color: "#111" }}>
          <h1>SpaceX</h1>
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
