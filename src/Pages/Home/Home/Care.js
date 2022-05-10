import React from "react";
import care from "../../../assets/images/treatment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
const Care = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row">
        <img src={care} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        <PrimaryBtn></PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Care;
