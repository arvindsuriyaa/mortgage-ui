import React from "react";
import "./About_Us.css";
export default function About_Us() {
  return (
    <div>
      <main>
        <div class="main_container card">
          <div class="para0 card-body ">
            <h1 data-aos="fade-down-right">Who we are</h1>
            <br />
            <h4 data-aos="zoom-out-left">
              NatWest Group is a relationship bank for a digital world. We
              champion potential; breaking down barriers and building financial
              confidence so the 19 million people, families and businesses we
              serve in communities throughout the UK and Ireland can rebuild and
              thrive. If our customers succeed, so will we.
            </h4>
            <div class="main_content card">
              <div class="main_image"></div>
            </div>
          </div>
          <div class="para1 flex ">
            <h3 className="color" data-aos="flip-up">
              Leadership & Governance
            </h3>
            <img
              src="data:image/jpeg;base64,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"
              data-aos="slide-up"
              width="500px"
            />
            <p class="p">
              Our priority is to maintain the highest standards of corporate
              governance, business integrity and professionalism. That’s how we
              drive long-term sustainable success.
            </p>
          </div>
          <div class="para1 flex card">
            <h3 data-aos="flip-up">Banking brands</h3>

            <img
              src="https://nationalcareersweek.com/wp-content/uploads/2020/12/natwest-brands-image-public.png"
              data-aos="slide-up"
              width="500px"
            />
            <p class="p">
              We champion potential and seek to create a better future. As a UK
              banking and financial services company, we’ve evolved to meet the
              needs of large companies, as well as small businesses and
              individuals. Check out the wide range of products and services
              available from our brilliant brands.
            </p>
          </div>
          <div class="para1 flex ">
            <h3 className="color" data-aos="flip-up">
              Where we do business
            </h3>
            <img
              src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/image.dim.480.where-we-do-business.jpeg"
              data-aos="slide-up"
              width="500px"
            />
            <p class="p">
              {" "}
              NatWest Group is a UK-centred bank with its headquarters in
              Edinburgh, Scotland. We support our customers to access
              international markets in Europe, Asia and the U.S.<br/><br/> Our
              headquarters - <br/>Gogarburn 175 Glasgow Road<br/> Edinburgh EH12 1HQ <br/>Please
              refer to our office locations below.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
