import React, { useState } from 'react';
import './Users.css';

const Users = (props) => {
    const [mobile, setmobile] = useState('');
    const showPhone = () => setmobile(phone);
    const {name, picture, email,phone } = props.user;
    const addmember = props.addmember;
    const fullName = name.first + '' + name.last;
    return (
        <div className='usersStyle'>
            <div>
                <img src={picture.large} alt="" />
            </div>
            <div style={{marginLeft:'20px'}}>
            <h1> Name: {fullName}</h1>
            <p>Email: {email}</p>
            <p>phone: {mobile}</p>
            <button onClick={showPhone} >Show Phone Number</button>
            <button onClick={() => addmember(fullName)}>Add Me</button>
            </div>
        </div>
    );
};

export default Users;