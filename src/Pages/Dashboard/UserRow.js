import React from 'react';

const UserRow = ({user}) => {
    const {email} = user;
    return (
        <tbody>    
            <tr>
                <th>1</th>
                <td>Email {email}</td>
                <td><button className='btn btn-xs'>Make Admin</button></td>
                <td><button className='btn btn-xs'>Remove User</button></td>
            
            </tr>
        </tbody>
    );
};

export default UserRow;