import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bagClass }) => {
  return (
    <div class={`card card-side bg-base-100 shadow-xl ${bagClass}`}>
      <figure className="pl-6">
        <img src={img} alt="clock" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
