import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Hd kom Herry",
      review: "",
      location: "Jessore",
      img: people1,
    },
    {
      _id: 2,
      name: "winson Herry",
      review: "",
      location: "Dahaka",
      img: people2,
    },
    {
      _id: 3,
      name: "Tomes Herry",
      review: "",
      location: "Khulna",
      img: people3,
    },
  ];
  return (
    <section className="m-28">
      <div className="flex justify-between">
        <div className="">
          <h4 className="text-primary text-xl font-bold">Testimonial</h4>
          <h2 className="text-3xl">Ours Patient say</h2>
        </div>
        <div className="">
          <img src={quote} className="w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
