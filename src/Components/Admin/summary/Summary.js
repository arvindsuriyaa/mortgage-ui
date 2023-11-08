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

export default function Summary() {
  const [enquiry, setEnquiry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8085/nwml/api/loan/get");
        setEnquiry(res.data.sort((a, b) => a.LoanAmount - b.LoanAmount));
        console.log(enquiry);
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
                    <TableCell>Loan ID</TableCell>
                    <TableCell>Cust ID</TableCell>
                    <TableCell>Loan Amount</TableCell>
                    <TableCell>Status</TableCell>

                    <TableCell>Application Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enquiry.map((enq) => (
                    <TableRow key={enq.loanid}>
                      <TableCell>{enq.loanid}</TableCell>
                      <TableCell>{enq.custid}</TableCell>
                      <TableCell>{enq.loanamt}</TableCell>
                      <TableCell>{enq.currentstatus}</TableCell>

                      <TableCell>{enq.applytime}</TableCell>
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
