import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./Admin.css";
import Adminlogin from "./Adminlogin/Adminlogin";
import Admin_Content from "./Admin_Content/Admin_Content";
import Admin_Menu from "./Admin_Menu/Admin_Menu";
import Completereq from "./completedreq/Completereq";
import Docverification from "./completedreq/Docverification";
import Underwriting from "./completedreq/Underwriting";

import EnquiryDashboard from "./EnquiryDashboard/EnquiryDashboard";
import Summary from "./summary/Summary";

export default function Admin() {
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      axios
        .get(`${process.env.REACT_APP_API_PORT}/api/validate?type=admin`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (
            res?.data?.success &&
            !window.location.pathname?.includes("/admin/")
          ) {
            window.location.href = "/admin/main";
          }
          if (!res?.data?.success) {
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("token");
            window.location.href = "/admin";
          }
        });
    }
  }, []);

  if (token != null)
    return (
      <div>
        <Routes>
          <Route path="" element={<Adminlogin />} />
          <Route path="main" element={<Admin_Content />} />
          <Route path="docverification" element={<Docverification />} />
          <Route path="underwriting" element={<Underwriting />} />
          <Route path="approval" element={<Completereq />} />
          <Route path="enquiry" element={<EnquiryDashboard />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </div>
    );
  else {
    return (
      <div>
        <Adminlogin />
      </div>
    );
  }
}
