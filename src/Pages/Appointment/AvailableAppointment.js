import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);
  return (
    <div>
      <h3 className="text-xl text-center text-secondary">
        Available Appointment on: {format(date, "PP")}
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
         date={date} 
         treatment={treatment}
         setTreatment={setTreatment}
         ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
