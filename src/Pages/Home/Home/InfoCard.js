import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bagClass }) => {
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${bagClass}`}>
      <figure className="pl-6">
        <img src={img} alt="clock" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
