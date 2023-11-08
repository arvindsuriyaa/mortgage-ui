import * as yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import "./Enquire.css";
import { toast, ToastContainer } from "react-toastify";
export default function Enquire() {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phoneno: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      fetch(`${process.env.REACT_APP_API_PORT}/api/enquiry/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then((result) => {
        alert("Thanks for reaching out. Our officials will reach out you.");
      });
    },

    validationSchema: yup.object().shape({
      name: yup.string().required("Customer name cannot be blank"),
      address: yup.string().required("Address cannot be blank"),
      phoneno: yup
        .string()
        .required("Phone number cannot be blank")
        .min(10, "Please enter a valid phone number")
        .max(10, "Please enter a valid phone number"),
      email: yup
        .string()
        .email("Enter a valid Email")
        .required("Email cannot be blank"),
      message: yup.string().required("Message cannot be blank"),
    }),
  });

  return (
    <div className="heading">
      <br />
      <center>
        <h1 className="purples">We would ❤️ to hear from you </h1>
      </center>
      <br />
      <div className="enquire_flex">
        <div className="enquire_data">
          <img
            src="https://www.natwestinternational.com/content/dam/natwestinternational_com/assets/images/illustrations-personal/image.dim.480.cora-laptop-how-can-i-help-pers-ill-trans-nwi-450x280.png"
            className="enquire_pic"
          />
        </div>
        <div className="eq_form">
          <div className="form_content">
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={1}>
                <TextField
                  id="name"
                  name="name"
                  label="Name*"
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
                  id="phoneno"
                  name="phoneno"
                  label="Phone Number*"
                  type="number"
                  value={formik.values.phoneno}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneno && Boolean(formik.errors.phoneno)
                  }
                  helperText={formik.touched.phoneno && formik.errors.phoneno}
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
                  id="message"
                  name="message"
                  label="Message*"
                  rows={4}
                  multiline
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.Message && Boolean(formik.errors.Message)
                  }
                  helperText={formik.touched.Message && formik.errors.Message}
                />
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
              <br />
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
