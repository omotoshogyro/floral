import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <div className="section__two">
      <div className="sectiontwo__contents">
        <h3 className="sectiontwo__header">Products</h3>

        <h2 className="sectiontwo__subheader">services we render</h2>

        <div className="sectiontwo__divs">
          <div className="sectiontwo__firstdiv">
            {/* <div className="firsticon__section">
              <div className="icon__bg"></div>
              <span className="for__icons">
                <SearchIcon className="first__icon" />
              </span>
            </div> */}

            <div className="words">
              <h3 className="sectiontwoword__header">Verification Service</h3>
              <p className="sectiontwo__words">
                Save yourself from demolition, 3rd party claimant, and Scams by
                availing yourself of our verification service which brings
                together our field expert to help you know the status of the
                landed property you want to buy.
              </p>
            </div>

            <div className="secondicon__section">
              <ArrowForwardIosIcon className="second__icon" />
            </div>
          </div>
          <div className="sectiontwo__seconddiv">
            {/* <div className="firsticon__section">
              <div className="icon__bg"></div>
              <span className="for__icons">
                <SearchIcon className="first__icon" />
              </span>
            </div> */}

            <div className="words">
              <h3 className="sectiontwoword__header">Complete Property Buyer Services</h3>
              <p className="sectiontwo__words">
              Do you need to buy your choice property at your choice location, or you just need property services like Survey, Valuation, Documentation, Sourcing, Negotiation, Payment . . . then engage this Service at 100% done for you. This service caters for both individuals, corporate organizations, within Nigeria and in Diaspora.
              </p>
            </div>

            <div className="secondicon__section">
              <ArrowForwardIosIcon className="second__icon" />
            </div>
          </div>
        </div>
        <div className="sectiontwo__btn">
            <button className="btn__sectiontwo">
                View All Products
            </button>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
