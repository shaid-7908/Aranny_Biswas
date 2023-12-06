import React from "react";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";

const WelcomeThree = ({ data, image }) => (
  <section className="white-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
        <Collapse
          accordion={true}
          defaultActiveKey="1"
          className="panel-group accordion-transparent mt-50"
          id="accordion-transparent"
        >
          {data.map((panel) => (
            <Collapse.Panel
              key={panel.id}
              header={panel.title}
              className="panel panel-default"
            >
              {panel.text}
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </div>
  </section>
);

export default WelcomeThree;
