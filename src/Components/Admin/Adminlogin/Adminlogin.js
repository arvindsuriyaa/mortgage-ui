import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Adminlogin.css";

export default function Adminlogin() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      empid: "",
      password: "",
      token: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_PORT}/login`, {
          userName: values.empid,
          password: values.password,
          admin: true,
        })

        .then((res) => {
          if (res?.data?.token) {
            let token = res.data.token;
            let empid = res.data.userName;

            sessionStorage.setItem("token", token);
            sessionStorage.setItem("id", empid);
            window.location.reload();
          } else {
            alert(res?.data?.message);
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setOpen(true);
        });
    },

    validationSchema: yup.object().shape({
      password: yup.string().required("Password cannot be empty"),
      empid: yup.string().required("Employee ID cannot be blank"),
    }),

    //     axios.get(`http://localhost:8080/api/cust/get/${cid}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })

    //     .catch((err) => {
    //       console.log(err.response.data.message);
    //     });
    // })
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="admin_login">
      <img
        src="https://logos-world.net/wp-content/uploads/2021/02/NatWest-Logo.png"
        width={250}
      />
      <br />
      <div className="form_content">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="empid"
              name="empid"
              label="Employee ID*"
              value={formik.values.empid}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.empid && Boolean(formik.errors.empid)}
              helperText={formik.touched.empid && formik.errors.empid}
            />
            <TextField
              id="password"
              name="password"
              label="Password*"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
        <br />
      </div>
    </div>
  );
}
