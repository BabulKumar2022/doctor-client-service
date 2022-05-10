import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div class="grid grid-cols-3 mt-10  gap-5 ps-12">
      <InfoCard bagClass='bg-gradient-to-r from-secondary to-primary' cardTitle="Opening Hours" cardText="9:00Am--5:00PM" img={clock}></InfoCard>
      <InfoCard bagClass='bg-accent' cardTitle="Our Location" cardText="Click identify our location" img={marker}></InfoCard>
      <InfoCard bagClass='bg-gradient-to-r from-secondary to-primary' cardTitle="Contact Us" cardText="0172000000000" img={phone}></InfoCard>
      
      
    </div>
  );
};

export default Info;
