import React, { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About_Us from "./Components/About Us/About_Us";
import Admin from "./Components/Admin/Admin";
import Adminlogin from "./Components/Admin/Adminlogin/Adminlogin";
import Admin_Content from "./Components/Admin/Admin_Content/Admin_Content";
import Completereq from "./Components/Admin/completedreq/Completereq";
import Docverification from "./Components/Admin/completedreq/Docverification";
import Underwriting from "./Components/Admin/completedreq/Underwriting";
import Contact_Us from "./Components/Contact Us/Contact_Us";

import Dasbhboard_Content from "./Components/Dashboard/Dashboard_Content/Dasbhboard_Content";
import EMICalculator from "./Components/EMI Calculator/EMICalculator";
import Enquire from "./Components/Enquire/Enquire";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Loader from "./Components/Loader/Loader";
import OurProducts from "./Components/Our Products/OurProducts";
import axios from "axios";
const Login = React.lazy(() => import("./Components/Login/Login"));
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));
const Register = React.lazy(() => import("./Components/Register/Register"));

function App() {
  axios.interceptors.response.use(
    (config) => {
      /** In dev, intercepts request and logs it into console for dev */
      console.info("✉️ ", config);
      if (
        !config?.data?.success &&
        window?.location?.pathname?.includes("dashboard")
      ) {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("token");
        window.location.href = "/login";
      }
      return config;
    },
    (error) => {
      console.error("✉️ ", error);

      return Promise.reject(error);
    }
  );

  return (
    <div className="App">
      <BrowserRouter>
        {!window.location.pathname.includes("admin") && <Header />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/aboutus" element={<About_Us />}></Route>
            <Route path="/ourproducts" element={<OurProducts />}></Route>
            <Route path="/emicalculator" element={<EMICalculator />}></Route>
            <Route path="/enquire" element={<Enquire />}></Route>
            <Route path="/contactus" element={<Contact_Us />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/login/register" element={<Register />}></Route>
            <Route
              path="/login/resetpassword"
              element={<ForgotPassword />}
            ></Route>
            <Route path="/dashboard/*" element={<Dashboard />}></Route>

            <Route path="/admin/*" element={<Admin />}></Route>
            {/* // children={ */}
            {/* //  <React.Fragment> */}
            {/*          
                <Route path='main' element={<Admin_Content/>}/>
                <Route path="docverification" element={<Completereq />} />
                <Route path="underwriting" element={<Docverification />} />
                <Route path="approval" element={<Underwriting />} />
                </React.Fragment>
              }>       <Route path="login" element={<Adminlogin />}/></Route> */}

            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>

        {!window.location.pathname.includes("admin") && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
