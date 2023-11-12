import { Login } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Dashboard_Home.css";
export default function Dashboard_Home() {
  const [userdata, setUserdata] = useState([]);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [validation, setValidation] = useState([]);
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    console.log('id: ', id);
    axios
      .get(`${process.env.REACT_APP_API_PORT}/api/cust/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((obj) => {
        console.log("obj: ", obj);
        if (!obj?.data?.success) {
          setValidation(false);
          sessionStorage.removeItem("id");
          sessionStorage.removeItem("token");
        } else {
          setValidation(true);
          setUserdata(obj?.data?.data?.[0]);
          console.log(userdata);
        }
      })
      .catch((error) => {
        setValidation(false);
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("token");
      });
  }, [validation]);
  console.log(validation);
  if (validation == true)
    return (
      <div>
        <div className="card_container">
          <div className="card_body">
            <div className="nat_card_logo">
              <div className="card_logo_main">
                <img
                  src="https://seeklogo.com/images/N/nat-west-1969-to-2016-logo-A61F210017-seeklogo.com.png"
                  width={50}
                />
              </div>
            </div>
            <div className="chip_container">
              <div className="chip">
                <div className="line1">
                  <div className="line2"></div>

                  <div className="line2"></div>
                </div>
                <div className="line1">
                  <div className="line2"></div>
                </div>
                <div className="line1">
                  <div className="line2"></div>
                </div>
                <div className="line1">
                  <div className="line2"></div>
                </div>
                <div className="line1">
                  <div className="line2"></div>
                </div>
                <div className="line1">
                  <div className="line2"></div>
                </div>
                <div className="line1">
                  <div className="line2"></div>
                </div>
              </div>
            </div>
            <div className="cardnumber">
              XXXX XXXX XXXX {userdata.card_number}
            </div>
            <div className="card_validity">
              <p>
                Exp. <span>{userdata.expiry}</span>
              </p>
            </div>
            <div className="cardholder_name">
              <p>{userdata.name}</p>
              <img
                src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-Free-Download-PNG.png"
                width={70}
                className="visa_logo"
              />
            </div>
          </div>{" "}
        </div>
        <div className="summary">
          <br />
          <br />
          {/* <center><h2>Account Sumary</h2></center><br/>
        <br/> */}
          {/* <div className='summarise'>    
        <div className='summary_heading'>
        <h5>Accountholder Name:</h5>
        <h5>Card Number:</h5>
        <h5>Account Balance:</h5>
        <h5>Email ID:</h5>
        <h5>Address:</h5>
        <h5>Account Number:</h5>
        <h5>Phone Number:</h5>
        </div>
        <div className='summary_content'>
        <h5>name</h5>
        <h5>XXXX XXXX XXXX card</h5>
        <h5>£ amount</h5>
        <h5>id</h5>
        <h5>address</h5>
        <h5>account</h5>
        <h5>phone</h5>
        </div>
        </div> */}
          <br />
        </div>
      </div>
    );
  else {
    navigate("/login");
  }
}
