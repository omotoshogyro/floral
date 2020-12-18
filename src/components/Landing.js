import React from "react";
import TextLoop from "react-text-loop";

import "./Landing.css";

function Landing() {
  return (
    <div
      className="landing"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(home-bg.jpg)`,
        backgroundPosition: "center center",
      }}
    >
      <div
        className="contents"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="animated__texts">
          <p>We are</p>

            <TextLoop delay="0">
              <h1 className="large__text">FloralHomes GC</h1>
              <h1 className="large__text">SECURE, STERLING & SEAMLESS</h1>
            </TextLoop>


              <p className="bottom__para">
                Foremost Online Property Verification & Real Estate Investment
                Company
              </p>
              <p className="bottom__para">
                Services in Real Estate & Property Development
              </p>
           
 
          <button className="aboutus__btn">About Us</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
