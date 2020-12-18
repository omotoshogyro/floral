import React from "react";
import "./Testimonial.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import StarRateIcon from "@material-ui/icons/StarRate";

function Testimonial() {
  const slides = [
    {
      word:
        "I am an estate surveyor and i have being following the trend of your good advice, They are golden! if only a good investor will take to it. Thank you FloraHomes.",

      name: "Engr. Charles",
    },
    { word: "This is the third Verification I am doing with FloraHomesGC. It baffles me to know that it is one of the three lands that is to an extent safe. Thank goodness they helped me uncovered this early enough and came to my rescue ", 
    name: "Otunba Olarenwaju (Nigeria)" 
},
  ];

  return (
    <div
      className="testimonial"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(testimonial-bg.jpg)`,
        backgroundPosition: "center center",
      }}
    >
      <div
        className="contents__container"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          opacity: ".98",
        }}
      >
        <p className="testimonial__header">Testimonials</p>
        <h2>What Clients Say</h2>

        <Slider>
          {slides.map((slide, index) => (
            <div className="comment" key={index}>
              <p className="quote__icon">
                <FormatQuoteIcon />
              </p>
              <p className="comment__word">{slide.word}</p>

              <p className="comment__name">
                <b>{slide.name}</b>
              </p>

              <div className="star__rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </div>
            </div>
          ))}
        </Slider>
        <div className="comment">
          {/* <p className="quote__icon">
            <FormatQuoteIcon />
          </p> */}

          {/* <p className="comment__word">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            obcaecati alias similique corrupti voluptatum magni voluptates minus
            delectus. Laudantium, vero. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Mollitia ullam minima laudantium unde quidem
            culpa.
          </p> */}

          {/* <p className="comment__name">
            <b>Engr. Charles</b>
          </p>

          <div className="star__rating">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
