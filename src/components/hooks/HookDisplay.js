import React, { useState } from 'react';
import './../../App.css';

const HookDisplay = (props) => {
    // console.log(props);
    const user = props.data;
    console.log(`user`)
    console.log(user);

    return (
        <div className="col-5 border rounded">
            <h2>---Live typing below---</h2>
            <div className="container-fluid">
                <div className="row p-1">
                    <h6 className="col-3">Username: </h6>
                    <span className="col-8">{user.username}</span>
                </div>
                <div className="row p-1">
                    <h6 className="col-3">Email: </h6>
                    <span className="col-8">{user.email}</span>
                </div>
                <div className="row p-1">
                    <h6 className="col-3">Password: </h6>
                    <span className="col-8">{user.password}</span>
                </div>
            </div>
            {/* <p><span className="boldMe">Username : </span> {username}</p>
            <p><span className="boldMe">email : </span> {email}</p>
            <p><span className="boldMe">password : </span> {password}</p> */}
        </div>
    )

}

export default HookDisplay;