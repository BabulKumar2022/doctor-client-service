import React from "react";
import { useQuery } from "react-query";
import Loading from "../Home/Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="">
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            doctors.map((doctor, index) => 
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
              ></DoctorRow>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
