import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Dashboard_Header.css";
export default function Dashboard_Header() {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="dashboard_header">
      <div className="header_logo_container">
        <img
          className="header_logo"
          src="https://i.ibb.co/JxHBLGf/logo-png.png"
        ></img>
        {/* <div style={{ marginTop: "10px" }}>
          co-powered by {"  "}
          <img
            className="header_logo"
            src="https://companieslogo.com/img/orig/IEL.AX_BIG.D-fe966b2b.png?t=1648021418"
          ></img>
        </div> */}
      </div>
      <div className="menu">
        <NavLink to="/dashboard/" activeclassname="active" exact="true">
          Home
        </NavLink>
        <NavLink
          to="/dashboard/apply_loan"
          activeclassname="active"
          exact="true"
        >
          Apply Loan
        </NavLink>
        <NavLink
          to="/dashboard/loan_status"
          activeclassname="active"
          exact="true"
        >
          Track Application
        </NavLink>
        <div onClick={logout}>
          <i className="fas fa-power-off power_button red_colo"></i>
        </div>
      </div>
    </div>
  );
}
