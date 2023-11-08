import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Admin_Menu.css";
export default function Admin_Menu() {
  const navigate = useNavigate()
  const logout = () =>
  {
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('token')
    navigate('/admin')
  }
  return (
    <div className="admin_menu_header">
      <div className="header_logos_container">
        <img
          className="header_logo"
          src="https://i.ibb.co/JxHBLGf/logo-png.png"
        ></img>
      </div>
      <div className="admin_menu">
        <NavLink to="/admin/main" activeclassname="active" exact="true">
          New Request
        </NavLink>
        <NavLink
          to="/admin/docverification"
          activeclassname="active"
          exact="true"
        >
          Document Verification
        </NavLink>
        <NavLink to="/admin/underwriting" activeclassname="active" exact="true">
          Underwriting
        </NavLink>
        <NavLink to="/admin/approval" activeclassname="active" exact="true">
          Approval
        </NavLink>
        <NavLink to="/admin/enquiry" activeclassname="active" exact="true">
          Enquiry
        </NavLink>
        <NavLink to="/admin/summary" activeclassname="active" exact="true">
          Summary
        </NavLink>
        <div className="logout_bttn" onClick={logout}><i className="fas fa-power-off"></i></div> 
      </div>
    </div>
  );
}
