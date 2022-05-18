import React from "react";
import { useQuery } from "react-query";
import Loading from "../Home/Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2> All User:{users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead >
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => <UserRow
              key={user._id}
              user={user}
              refetch={refetch}
              ></UserRow>) 
         
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
