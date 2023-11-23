import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <main>
        <div className="main_container card">
          <div className="para0 card-body">
            {/* <div className="main_content card"> */}
            <h1 className="heading_font_o color" data-aos="slide-up">
              <b>Mortgages with NatWest</b>
            </h1>
            <h3 data-aos="flip-down" className="home_head_font">
              You could buy your new home with just a 5% deposit!!
            </h3>
            <img
              className="graph"
              src="https://www.natwest.com/content/dam/natwest/personal/mortgages/illustrations/image.dim.480.nw-house-medal-best-bank-bba-on-yell-471.png"
              data-aos="zoom-out-right"
            />
            <img
              className="picture"
              src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              data-aos="zoom-out-right"
            />
            <div className="main_image"></div>
            {/* </div> */}
          </div>
          <div className="para1 flex ">
            <h3 className="color" data-aos="slide-up">
              First time buyer mortgage
            </h3>
            <img
              src="https://www.natwest.com/content/dam/natwest/personal/mortgages/illustrations/image.dim.480.nw-pers-ill-4-ou-of-5-ftb-mortgages.png"
              className="image"
              data-aos="slide-up"
              width="500px"
            />
            <p className="p" data-aos="slide-up">
              Buying a new home can be a nerve-wracking process in this market –
              especially if you’re a first-time homebuyer. Unfortunately, this
              is also one of the most expensive purchases you’re likely to make.
              As a result, it’s important to have as much information as
              possible at your fingertips, so that you are well equipped to make
              an informed decision. From checking your credit ratings to
              speaking with housing financiers about appropriate mortgage rates,
              young homebuyers need to go into this process with their eyes wide
              open.
            </p>
          </div>
          <div className="para1 flex card">
            <h3 data-aos="slide-up">Energy saving ideas for your home</h3>

            <img
              src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229__340.jpg"
              className="image"
              data-aos="slide-up"
              width="500px"
            />
            <p className="p" data-aos="slide-up">
              An Energy Performance Certificate (EPC) rates a property's energy
              efficiency and could help you to buy a home that’s more energy
              efficient, helping to reduce your impact on the climate too.
            </p>
          </div>
          <div className="para1 flex ">
            <h3 className="color" data-aos="slide-up">
              Looking for a new deal?
            </h3>
            <p className="p" data-aos="slide-up">
              {" "}
              If your current NatWest mortgage deal is ending or you’re on
              Standard Variable Rate, you could switch to a better deal. Find
              out more about switching your mortgage deal and get a personalised
              quote in just a few minutes.
            </p>
          </div>
          <div className="para1 flex ">
            <h3 id="aboutus" data-aos="slide-up">
              95% mortgages
            </h3>
            <img
              src="https://www.natwest.com/content/dam/rbs_com/rbs/Images/news/2016/08/image.dim.360.mortgage_moving_house.jpg"
              className="image"
              data-aos="slide-up"
              width="500px"
            />
            <p className="p">
              Saving money for a mortgage deposit can be tricky. Therefore, a
              good option for buying a property may be a 95% mortgage which
              allows for a deposit as low as 5%. Exclusions & eligibility
              criteria apply.
            </p>
          </div>

          <div id="contactus" className="para1 flex">
            <h3 id="aboutus" data-aos="slide-up">
              New home feeling? Let us help
            </h3>
            <img
              src="https://www.natwest.com/content/dam/natwest/personal/natwest-labs/image.dim.480.nw-pers-ill-fabulous-house-for-yellow-trans.png"
              className="image"
              data-aos="slide-up"
              width="500px"
            />
            <p className="p">
              Take the first step and see how much you could borrow today. Your
              home may be repossessed if you do not keep up repayments on your
              mortgage.
            </p>
          </div>
          <div id="contactus" className="para1 flex">
            <h3 id="aboutus" data-aos="slide-up">
              Ready to apply?
            </h3>
            <img
              src="https://www.natwest.com/content/dam/natwest/personal/natwest-labs/illustrations/image.dim.480.nw-pers-ill-nw-labs-light-bulb-phone.png"
              className="image"
              data-aos="slide-up"
              width="500px"
            />
            <p className="p">
              Apply online today, or contact us if you'd like support. We'll ask
              you to complete an Agreement in Principle before starting a
              mortgage application.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
