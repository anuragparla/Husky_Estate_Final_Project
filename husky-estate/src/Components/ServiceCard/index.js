import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <>
      {services.map((service) => {
        const { id, img, title, text, action } = service;
        return (
          <article key={id} className="service-card">
            <img src={img} alt={title} />
            <div className="card-content">
              <div className="card-title">{title}</div>
              <p>{text}</p>
              <button className="action-btn">{action}</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ServiceCard;
