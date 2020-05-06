import React, { useState } from 'react';
import './../../App.css';

const HookDisplay = (props) => {

    const {username,email,password} = props.data;

    return (
        <div>
            <h2>---Live typing below---</h2>
            <p><span className="boldMe">Username : </span> {username}</p>
            <p><span className="boldMe">email : </span> {email}</p>
            <p><span className="boldMe">password : </span> {password}</p>
        </div>
    )

}

export default HookDisplay;