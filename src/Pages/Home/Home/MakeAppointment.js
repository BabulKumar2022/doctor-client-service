import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
const MakeAnointment = () => {
  return (
    <section style={{background: `url(${appointment})`}}  className="flex justify-center items-center mt-20">
      <div className=" flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className=" flex-1">
        <h3 className="text-xl text-primary  mb-7 ">Appointment</h3>
        <h4 className="text-3xl text-white">Make an appointment Today</h4>
        <p className="text-white mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn></PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAnointment;
