import React from "react";
import ReactWow from "react-wow";

const CounterTwo = ({ data, bg }) => (
  <section className={(bg === "dark" ? "dark" : "white") + "-bg pt-80 pb-80"}>
    <div className="container">
      <div className="row">
        {data.map((counter, i) => (
          <div className="col-md-3 col-sm-6" key={counter.id}>
            <ReactWow animation="fadeInUp" delay={`0.${i}s`}>
              <div className="counter">
                <i
                  className={`${counter.icon} ${
                    bg === "dark" ? "light" : "dark"
                  }-icon font-40px`}
                ></i>
                <h2 className={bg === "dark" ? "white-color" : ""}>
                  <span className="count font-600">{counter.title}</span>
                  <span className="font-600">+</span>
                </h2>
                <h3 className={(bg === "dark" ? "white" : "dark") + "-color"}>
                  {counter.text}
                </h3>
              </div>
            </ReactWow>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CounterTwo;
