import React from "react";
import { NavLink } from "react-router-dom";
// import "./Footer.css";
export default function FooterTab() {
  return (
    <div>
      <div
        className="bottomnavnew__Container"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0px",
          background: "rgb(255, 255, 255,0.9)",
          backdropFilter: "blur(8px)",
          width: "100%",
          height: "10%",
          color: "rgb(33, 33, 33)",
          zIndex: "100",
          padding: "15px 10px 10px",
          borderTop: "1px solid rgb(236, 236, 236)",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div
            className="bottomnavnew__NavBtnContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              id="image-active"
              style={{ maxWidth: "100%" }}
              src="/icons/home.svg"
              alt="Home"
            />
            <div
              style={{
                color: "rgb(68, 67, 66)",
                fontSize: "11px",
                marginLeft: "0px",
                lineHeight: "18px",
                fontWeight: "500",
                marginTop: "2px",
              }}
              className="bottomnavnew__NavItem"
            >
              Home
            </div>
          </div>
        </NavLink>
        <NavLink to="/launches" style={{ textDecoration: "none" }}>
          <div
            className="bottomnavnew__NavBtnContainer-zrz7az-1 dXypb"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              id="image-active1"
              style={{ maxWidth: "100%" }}
              src="/icons/database.svg"
              alt="category"
            />
            <div
              style={{
                color: "rgb(68, 67, 66)",
                fontSize: "11px",
                marginLeft: "0px",
                lineHeight: "18px",
                fontWeight: "500",
                marginTop: "2px",
              }}
              className="bottomnavnew__NavItem-zrz7az-2 cQGftI"
            >
              Launches
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
