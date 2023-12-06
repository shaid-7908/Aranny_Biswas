import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
// import imgSlide1 from "../../assets/images/slides/home-bg-18.jpg";
// import imgSlide2 from "../../assets/images/slides/home-bg-19.jpg";

const PhotographySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "default-slider",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="home-slider" id="home">
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${"./Assets/Images/Avatar/hero2.jpg"}) center center / cover scroll no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center white-color">
                  <h2 className="font-700">
                    Capturing Moments, Creating Memories
                  </h2>
                  <h3 className="font-200 text-uppercase source-font">
                    Through the Lens of Life
                  </h3>
                  <p className="text-center mt-30">
                    <Link
                      to="/grid-2-columns"
                      className="btn btn-outline-white btn-md btn-default"
                    >
                      View Project
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${"./Assets/Images/Avatar/hero1.jpg"}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center white-color">
                  <h2 className="font-700">Frame by Frame, Stories Unveiled</h2>
                  <h3 className="font-200 text-uppercase source-font">
                    Your World, My Vision
                  </h3>
                  <p className="text-center mt-30">
                    <Link
                      to="/grid-2-columns"
                      className="btn btn-dark btn-md btn-default"
                    >
                      View Project
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default PhotographySlider;
