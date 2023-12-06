import React from "react";

const AboutUsThree = ({ image, pathVideo, setToggler, toggler }) => (
  <section className="pt-0 pb-0 fitness-section" id="about">
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <div className="col-md-4 col-sm-12 dark-bg">
          <div className="col-inner pt-70 pb-50 spacer">
            <h3>
              Welcome to Fitness Club. If you want to be a hit in life, you
              gotta be fit and fine.
            </h3>
            <p className="mt-20">
              <a
                href={process.env.PUBLIC_URL}
                className="btn btn-light font-500 btn-md btn-square remove-margin"
              >
                Know More
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-6 bg-flex-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="center-layout">
            <div className="v-align-middle">
              <a
                className="popup-youtube"
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                <div className="play-button">
                  <i className="eicon ion-android-arrow-dropright"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 darken-bg">
          <div className="col-inner pt-70 pb-50 spacer white-color">
            <h3>Our Story</h3>
            <p className="mt-20">
              Your body is the church where Nature asks to be reverenced.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              iaculis vehicula ipsum, sit amet eleifend risus dapibus in.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsThree;
