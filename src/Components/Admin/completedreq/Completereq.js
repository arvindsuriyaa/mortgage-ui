import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Docverification from "./Docverification";
import Underwriting from "./Underwriting";
import "./Admin_Content.css";
import Admin_Menu from "../Admin_Menu/Admin_Menu";
import "react-toastify/dist/ReactToastify.css";

export default function Completereq() {
  const [loan, setLoan] = useState([]);
  let date = Date();
  const [age, setAge] = useState("");
  const [stepcounter, setStepcounter] = useState();
  const [loanstatus, setLoanstatus] = useState();
  const [tempstatus, setTempstatus] = useState({});
  // console.log('tempstatus: ', tempstatus);
  const [newupdatestatus, setNewupdatestatus] = useState({});
  console.log('newupdatestatus: ', newupdatestatus);
  const handleChange = (event) => {
    setAge[newupdatestatus](event.target.value);
  };

  const steps = [
    "Background Checks",
    "Document Verification",
    "Underwriting",
    "Approved",
  ];

  // const stepvalidator = (index) => {
  //   if (tempstatus[index].approved === false) {
  //     setStepcounter(5);
  //     setLoanstatus("Approved");
  //   } else if (loan[0].offer === true) {
  //     setStepcounter(4);
  //     setLoanstatus("Offer");
  //   } else if (loan[0].underwriting === true) {
  //     setLoanstatus("Underwriting");
  //   } else if (loan[0].valuation === true) {
  //     setStepcounter(2);
  //     setLoanstatus("Background Checks");
  //   } else {
  //     setStepcounter(0);
  //     setLoanstatus("Applied");
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_PORT}/api/loan/get?type=admin`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setLoan(
          res.data?.result
            .filter((item) => item.status === "Applied")
            .sort((a, b) => b.creditscore - a.creditscore)
        );
        loan.sort((a, b) => a.loanId - b.loanId);
        let obj1 = {};
        let obj = {};
        res.data?.result
          .filter((item) => item.status === "Applied")
          .sort((a, b) => b.creditscore - a.creditscore)
          .forEach((item, index) => {
            let variable = `${index}`;
            let statusVariable = `${index}`;
            obj1[statusVariable] = 1;
            obj[variable] = false;
          });
        setNewupdatestatus(obj1);

        setTempstatus(obj);
        setStepcounter(5);
      } catch (err) {}
    };
    fetchData();
  }, []);

  let updatestatus = (index, loanId) => {
    let res = { ...tempstatus };
    res[index] = true;
    setTempstatus(res);

    let statusType = steps[newupdatestatus[index] - 1];
    console.log("statusType: ", { statusType, loanId });
    axios
      .put(
        `${process.env.REACT_APP_API_PORT}/api/loan/update/${loanId}?type=admin`,
        {
          currentstatus: statusType,
          updatetime: date,
          status: statusType === "Approved" ? "Approved" : "Applied",
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success("Success, Status Updated", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    setTimeout(() => {
      window.location.reload();
    }, 2100);
  };

  let onClickCancel = (index, loanId) => {
    let res = { ...tempstatus };
    res[index] = true;
    setTempstatus(res);

    let statusType = steps[newupdatestatus[index] - 1];
    console.log("statusType: ", { statusType, loanId });
    axios
      .put(
        `${process.env.REACT_APP_API_PORT}/api/loan/update/${loanId}?type=admin`,
        {
          currentstatus: statusType,
          updatetime: date,
          status: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success("Success, Status Updated", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    setTimeout(() => {
      window.location.reload();
    }, 2100);
  };

  return (
    <div className="dashboard_container">
      <Admin_Menu />
      <div className="admin_content">
        <br />
        <div className="admin_loan_container">
          <div className="row">
            {loan.map((obj, index) => {
              if (obj.currentstatus == "Approved") {
                // loanFound = true;
                let creditScore = "";
                let interest = "";
                if (obj.creditscore < 550) {
                  creditScore = "Very High Risk";
                  interest = 15;
                } else if (obj.creditscore > 551 && obj.creditscore < 600) {
                  creditScore = "High Risk";
                  interest = 11;
                } else if (obj.creditscore > 601 && obj.creditscore < 700) {
                  creditScore = "Medium Risk";
                  interest = 9;
                } else if (obj.creditscore > 701 && obj.creditscore < 799) {
                  creditScore = "Low Risk";
                  interest = 6;
                } else if (obj.creditscore > 800) {
                  creditScore = "Very Low Risk";
                  interest = 5.5;
                }

                return (
                  <div className="col-sm">
                    <Card sx={{ maxWidth: 550 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Loan Ref - NWMLO00{obj._id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Applied on: {obj.applytime}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Last updated: {obj.updatetime}
                        </Typography>
                        <br />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{ color: "blue" }}
                        >
                          Risk Analysis: {creditScore}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{ color: "blue" }}
                        >
                          Interest : {interest}%
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Customer ID: {obj.custid}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Property Estimate: £{obj.propertyrate}
                        </Typography>

                        <Typography variant="body2" color="text.primary">
                          Request Amount: £{obj.loanamt}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Request Tenure: {obj.loantenure} Years
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Current Status: {loanstatus}
                        </Typography>
                      </CardContent>
                      <Box sx={{ width: "100%" }}>
                        <Stepper
                          activeStep={stepcounter}
                          alternativeLabel
                        >
                          <Step key="1">
                            <StepLabel>Applied</StepLabel>
                          </Step>
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Box>

                      <CardActions>
                        <FormControl
                          variant="filled"
                          sx={{ m: 1, minWidth: 200 }}
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Update Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            value={newupdatestatus[index]}
                            onChange={(e) => {
                              // debugger

                              let res = { ...newupdatestatus };
                              res[index] = e.target.value;
                              setNewupdatestatus(res);
                            }}
                            name="currentstatus"
                            id="currentstatus"
                          >
                            {/* <MenuItem>
                              <em>None</em>
                            </MenuItem> */}
                            {steps.map((item, i) => {
                              return <MenuItem value={i + 1}>{item}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                        <Button
                          variant="contained"
                          sx={{ m: 1, minHeight: 55 }}
                          size="large"
                          onClick={() => updatestatus(index, obj.loanId)}
                        >
                          Update Status
                        </Button>

                        <Button
                          size="small"
                          onClick={() => onClickCancel(index, obj.loanId)}
                        >
                          Reject
                        </Button>
                      </CardActions>
                    </Card>
                    <br />
                    <ToastContainer
                      position="bottom-center"
                      autoClose={2000}
                      limit={1}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="colored"
                    />
                  </div>
                );
              }
            })}{" "}
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}
