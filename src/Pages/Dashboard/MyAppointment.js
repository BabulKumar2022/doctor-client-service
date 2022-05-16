import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user]= useAuthState(auth);
    useEffect(() =>{
     if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res => res.json())
        .then(data => setAppointment(data));
     } 
    }, [user]);
    return (
        <div>
           <h1 className='text-center my-4'>My Appointment: {appointment.length}</h1> 
           <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr className='text-center'>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointment.map(( a, index) => 
              <tr className='text-center'>
                <th>{index+1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;