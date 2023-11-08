import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className=" text-center text-white purple_o">
        <div className="footer-container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              This website is owned and maintained by NatWest Group ("us”, “we"
              or “our”). The services and information on this website
              ("Materials") are provided for Clients or prospective Clients of
              National Westminster Bank Plc (“NatWest”), NatWest Markets Plc
              (“NatWest Markets”), NatWest Markets N.V. (“NatWest Markets N.V.”)
              and NatWest Markets Securities Inc. ("NatWest Markets Securities")
              including any associated branches.
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Products</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Bank accounts
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Savings
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Investments
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Credit Cards
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Life Moments</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      View all life moments
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Managing your money
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Struggling financially
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Bereavement
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Help and Support</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Service status
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Natwest app
                    </a>
                  </li>
                </ul>
                <div className="text-center p-3">
          Copyright © National Westminster Bank plc 2022. Registered office: 250
          Bishopsgate, London, EC2M 4AA.
        </div>
              </div>
            </div>
          </section>
        </div>

      
      </footer>
    </div>
  );
}
