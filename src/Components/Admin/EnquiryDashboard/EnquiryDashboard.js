import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Admin_Menu from "../Admin_Menu/Admin_Menu";
import "./EnquiryDashboard.css";

export default function EnquiryDashboard() {
  const [enquiry, setEnquiry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_PORT}/api/enquiry/get?type=admin`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setEnquiry(res.data?.result);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <div className="dashboard_container">
      <Admin_Menu />
      <div className="admin_content">
        <br />
        <div className="admin_loan_container">
          <div className="enq_table_row">
            <TableContainer>
              <Table sx={{ maxWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone No.</TableCell>
                    <TableCell>Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enquiry.map((enq, i) => (
                    <TableRow key={i + 1}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{enq.name}</TableCell>
                      <TableCell>{enq.message}</TableCell>
                      <TableCell>{enq.email}</TableCell>
                      <TableCell>{enq.phoneno}</TableCell>
                      <TableCell>{enq.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
