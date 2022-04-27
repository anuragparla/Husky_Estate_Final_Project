import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = ({ services }) => {
  return (
    <>
      {services.map((service) => {
        const { id, img, title, text, action , to} = service;
        return (
          <article key={id} className="service-card">
            <img src={img} alt={title} />
            <div className="card-content">
              <div className="card-title">{title}</div>
              <p>{text}</p>
              <Link to={to}> <button className="action-btn">{action}</button> </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ServiceCard;
