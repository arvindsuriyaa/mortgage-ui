import React, { useState } from "react";
import "./EMICalculator.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import TableHead from "@mui/material/TableHead";
import { toast, ToastContainer } from "react-toastify";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(5);
  const [tenure, setTenure] = useState(0);
  const [emiArray, setEMIArray] = useState([]);
  const [render, setRender] = useState("false");
  const calculateEMI = () => {
    const r = interest / (12 * 100);
    const t = tenure * 12;
    let emi = (principal * r * (1 + r) ** t) / ((1 + r) ** t - 1);
    emi = emi.toFixed();
    let emiArray = [];
    let outstanding = principal;

    for (let i = 0; i < t; i++) {
      let interestAmount = outstanding * r;
      let principalAmount = emi - interestAmount;
      outstanding -= principalAmount;
      if (i == t - 1) {
        principalAmount = principalAmount + outstanding;
        interestAmount = interestAmount - outstanding;
        outstanding = 0;
      }
      emiArray.push({
        month: i + 1,
        emi: emi,
        interest: interestAmount.toFixed(2),
        principal: principalAmount.toFixed(2),
        outstanding: outstanding.toFixed(2),
      });
    }
    setEMIArray(emiArray);
    setRender(true);
  };

  return (
    <div>
      <br />
      <h1 className="  purples color" data-aos="slide-up">
        <b>NatwEMI Calculator</b>
      </h1>
 
      <div className="emi_container">
      
        {render != true && (
        <h4 className="emi_description">
<br/>          Home loans usually have a huge loan principal amount and a long
          tenure. It requires strategic planning for its repayment. You can use
          the Home Loan EMI Calculator of Natwest to calculate your EMI. It is a
          user-friendly designed calculator that can help you calculate and
          assess your home loan EMIs immediately. All you need to do is enter
          your loan amount, rate of interest and loan tenure and the results
          will be calculated instantly.
        </h4>)}
        <div>
          <br />
          <br />
          <label className="emi_label">Principal:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="emi_label">Interest:</label>
          <input
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="emi_label">Tenure (in years):</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
        <br />
        <button onClick={calculateEMI}>Calculate EMI</button>
    
      <br />
      <p className="emi_sc">
        *Note: Results generated by the calculator(s) are indicative in nature.
        The interest rate applied on the loan will depend on the credit rating
        and interest rate prevailing at the time of application.
      </p></div>
      {render == true && (
        <div className="table_emi_container">
          <div className="table_emi">
            <TableContainer>
              <Table sx={{ maxWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell>EMI</TableCell>
                    <TableCell>Interest</TableCell>
                    <TableCell>Principal</TableCell>
                    <TableCell>Outstanding</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {emiArray.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.month}</TableCell>
                      <TableCell>{item.emi}</TableCell>
                      <TableCell>{item.interest}</TableCell>
                      <TableCell>{item.principal}</TableCell>
                      <TableCell>{item.outstanding}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <br />
    </div>
  );
}
