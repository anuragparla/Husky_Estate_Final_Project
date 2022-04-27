import React, { useState } from "react";
import { Services } from "../../data";
import ServiceCard from "../ServiceCard";

const Service = () => {
  const [services, setServices] = useState(Services);
  return (
    <>
      <div className="card-title-1">
        <h3 className="services-h3">
          Whether you're buying, selling or renting, we can help you move
          forward.
        </h3>
      </div>
      <div className="services">
        <ServiceCard services={services} />
      </div>
    </>
  );
};

export default Service;
