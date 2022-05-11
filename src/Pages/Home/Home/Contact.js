import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const Contact = () => {
  return (
    <div
      style={{ background: `url(${appointment})`, backgroundSize: "cover" }}
      className=" flex justify-center"
    >
      <div className="form-control w-1/2  ">
        <label className="label ">
          <span className="label-text text-white text-center">Contact Us</span>
        </label>

        <span className="text-white">Email</span>
        <input
          type="text"
          placeholder="Your email"
          className="input input-bordered"
        />
        <span className="text-white">Subject</span>
        <input
          type="text"
          placeholder="write your subject"
          className="input input-bordered"
        />
        <span className="text-white">Description</span>
        <textarea
          type="text"
          placeholder="Description"
          className="input input-bordered"
        />
        <div className="flex justify-center my-10">
          <PrimaryBtn></PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
