import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth whitening",
      img: whitening,
    },
  ];
  return (
    <div>
      <div className="text-center text-xl   mt-10 ">
        <h2 className="text-primary uppercase font-bold">Our Services</h2>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
