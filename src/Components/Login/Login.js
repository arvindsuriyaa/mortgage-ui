import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loan, setData] = useState([]);
  const invalidcredentials = () => toast("Incorrect Credentials");
  const navigate = useNavigate();
  const sestoken = sessionStorage.getItem("token");
  console.log("sestoken: ", sestoken);

  useEffect(() => {
    if (sessionStorage.getItem("token")?.length) {
      window.location.href = "/dashboard";
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      custid: "",
      password: "",
      token: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_PORT}/login`, {
          custid: values.custid,
          password: values.password,
        })

        .then((res) => {
          console.log("res: ", res);
          let token = res.data.token;
          let cid = res.data.custid;
          if (!res?.data?.success) {
            toast.error("Incorrect Credentials!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.success("Login Success", {
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
              sessionStorage.setItem("token", token);
              sessionStorage.setItem("id", cid);
              navigate("/dashboard/");
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          toast.error("Incorrect Credentials!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    },

    validationSchema: yup.object().shape({
      password: yup.string().required("Password cannot be empty"),
      custid: yup.string().required("Customer ID cannot be blank"),
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
  if (sestoken == null) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="forms">
          <div className="login_container">
            <div className="login_head_text">
              <h1>LOGIN</h1>
              <br />
            </div>
            <div className="form_content">
              <form className="login_form_data" onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    id="custid"
                    name="custid"
                    label="Customer ID*"
                    type="number"
                    value={formik.values.custid}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.custid && Boolean(formik.errors.custid)
                    }
                    helperText={formik.touched.custid && formik.errors.custid}
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
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
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
              <br />
            </div>

            <div className="flx_row">
              <a href="/login/register">New User? Register</a>
              <a href="/login/resetpassword">Forgot Password</a>
            </div>
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  } else {
    navigate("/dashboard/");
    console.log("navigate: ", navigate);
  }
}
