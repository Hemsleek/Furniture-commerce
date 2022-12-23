import React from "react";
import { servicesInfo } from "../data";

import "./ServicesInfo.css";

const ServicesInfo = () => {
  return (
    <div className="ServicesInfo">
      {servicesInfo.map((service, serviceIndex) => (
        <div className="service" key={serviceIndex}>
          <h3 className="title">{service.title}</h3>
          <p>{service.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesInfo;
