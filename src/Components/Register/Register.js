import * as yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import "./Register.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/core";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const acc_no_reg_ex = /^6\d{7}$/;
  const id_no_reg_ex = /^8\d{6}$/;
  const max_date = new Date("2003-01-01");
  const min_date = new Date("1923-01-01");
  let timestamp = Date();
  let expiry_month = Math.floor(Math.random() * 11 + 1);
  let min = 23;
  let max = 28;
  let expiry_yr = Math.floor(Math.random() * (max - min + 1)) + min;
  let expiry = expiry_month + "/" + expiry_yr;
  let cardnumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  let amount = Math.floor(Math.random() * 10000);
  let pin = Math.floor(Math.random() * 10000);
  amount = amount.toFixed(2);
  const navigate = useNavigate();
  const cardnum = () => {
    if (cardnumber > 1000) {
      return cardnumber;
    } else {
      cardnumber = cardnumber + 1000;
      return cardnumber;
    }
  };
  const ipin = () => {
    if (pin > 1000) {
      return pin;
    } else {
      pin = pin + 1000;
      return pin;
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      acc_no: "",
      custid: "",
      gender: "",
      dob: "",
      card_number: cardnumber,
      pin: "",
      expiry: expiry,
      registeredAt: timestamp,
      modifiedAt: "",
    },
    onSubmit: (values) => {
      // fetch(`http://localhost:8081/api/register/add?id=${values.id}`)
      // .then(res => res.json())
      // .then(obj =>
      //   {    if(obj.length == 0)
      //     {

      axios
        .post(`${process.env.REACT_APP_API_PORT}/api/register/add`, values)
        .then((response) => {
          console.log(response);
          console.log(values);
          if (response?.data?.success) {
            toast.success("Registration Successful!", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 0,
              theme: "dark",
            });
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          } else {
            alert(response?.data?.message);
          }
        })
        .catch((error) => {
          //   setShowAlert(true);
          //   setAlertMessage("Password Reset Failed!");
          alert("User Already Exists");
        });
    },
    // else
    // {
    //   alert("User Already Exists")
    // }
    // })},

    validationSchema: yup.object().shape({
      name: yup.string().required("Customer name cannot be blank"),
      address: yup.string().required("Address cannot be blank"),
      pin: yup
        .string()
        .trim()
        .length(4, "PIN must be 4 digits long")
        .matches(/^\d+$/, "PIN must only contain numbers")
        .required("PIN cannot be blank"),
      phone: yup
        .string()
        .required("Phone number cannot be blank")
        .min(10, "Please enter a valid phone number")
        .max(10, "Please enter a valid phone number"),
      email: yup
        .string()
        .email("Enter a valid Email")
        .required("Email cannot be blank"),
      password: yup
        .string()
        .min(
          8,
          "Password must have minimum 8 characters with one letter in capital and one special character"
        )
        .matches(
          /[A-Z]/,
          "Password must have minimum 8 characters with one letter in capital and one special character"
        )
        .matches(
          /[^\w]/,
          "Password must have minimum 8 characters with one letter in capital and one special character"
        )
        .required("Password cannot be empty"),
      confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please re-enter the password"),
      acc_no: yup.string().required("Account number cannot be blank"),
      custid: yup.string().required("Customer ID cannot be blank"),
      dob: yup
        .date()
        .required("DOB cannot be blank")
        .max(
          max_date,
          "Invalid date of birth. Date should be before " +
            max_date.toDateString()
        )
        .min(
          min_date,
          "Invalid date of birth. Date should be after " +
            min_date.toDateString()
        ),
    }),
  });

  return (
    <div className="register_header">
      <br />
      <div className="register_container">
        <div className="register_form">
          <div className="register_text_container">
            <h2 className="register_text">Internet Banking Registration</h2>
            <br />
          </div>
          <br />
          <div className="form_content">
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={1}>
                <TextField
                  id="name"
                  name="name"
                  label="Customer Name*"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  id="address"
                  name="address"
                  label="Address*"
                  rows={4}
                  multiline
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone Number*"
                  type="number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email ID*"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password*"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirm Password*"
                  type="password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirm_password &&
                    Boolean(formik.errors.confirm_password)
                  }
                  helperText={
                    formik.touched.confirm_password &&
                    formik.errors.confirm_password
                  }
                />
                <TextField
                  id="pin"
                  name="pin"
                  label="Secret PIN**"
                  type="password"
                  value={formik.values.pin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.pin && Boolean(formik.errors.pin)}
                  helperText={formik.touched.pin && formik.errors.pin}
                />
                <TextField
                  id="acc_no"
                  name="acc_no"
                  label="Account Number*"
                  type="number"
                  value={formik.values.acc_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.acc_no && Boolean(formik.errors.acc_no)}
                  helperText={formik.touched.acc_no && formik.errors.acc_no}
                />
                <TextField
                  id="custid"
                  name="custid"
                  label="Customer ID*"
                  type="number"
                  value={formik.values.custid}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.custid && Boolean(formik.errors.custid)}
                  helperText={formik.touched.custid && formik.errors.custid}
                />
                <FormControl>
                  <FormLabel id="gender-radio">Gender</FormLabel>
                  <RadioGroup
                    name="gender"
                    id="gender"
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                      onChange={formik.handleChange}
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                      onChange={formik.handleChange}
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  id="dob"
                  label="D.O.B.*"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    max: max_date.toISOString().substring(0, 10),
                    min: min_date.toISOString().substring(0, 10),
                  }}
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                />
                {/* {showAlert && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>{alertMessage}</AlertDescription>
                  </Alert>
                )} */}
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
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
              </Stack>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
