import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h1 className="text-4xl text-purple-500 text-center">
            {" "}
            Admin Dashboard
          </h1>
          <Outlet></Outlet>
          {/* !-- Page content here -- */}
        </div>
        <div className="drawer-side">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* !-- Sidebar content here -- */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/myReview">My Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myHistory">My History</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add a doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctors">Manage doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
