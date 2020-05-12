import React, { useState, useEffect } from 'react';
import './../../App.css';

const HookDisplay = (props) => {
    // console.log(props);
    const { username, email, password } = props.data;
    const [secretePW, setSecretePW] = useState("");

    useEffect(() => {
        const str = "something Secrete "
        let appendStr =""
        let indSecreteString = 0;
        for(let i = 0; i < password.length; i++) {
            indSecreteString = i%str.length;
            appendStr += str[indSecreteString];
        }
        setSecretePW(appendStr);
    })

    return (
        <div className="col-5 border rounded">
            <h2>---Live typing below---</h2>
            <div className="container-fluid">
                <div className="row p-1">
                    <h6 className="col-3">Username: </h6>
                    <span className="col-8">{username}</span>
                </div>
                <div className="row p-1">
                    <h6 className="col-3">Email: </h6>
                    <span className="col-8">{email}</span>
                </div>
                <div className="row p-1">
                    <h6 className="col-3">Password: </h6>
                    <span className="col-8">{secretePW}</span>
                </div>
            </div>
        </div>
    )

}

export default HookDisplay;