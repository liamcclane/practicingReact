import React, { useState } from 'react';

const HookForm = (props) => {

    const {inputs, setInputs} = props;

    const createUser = (e) => {
        e.preventDefault();
        console.log("tried to create user");
        const newUser = inputs;
        console.log("Welcome", newUser);
    };

    const onChange = (event) => {
        console.log("the event parameter looks like");
        console.log(event);
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <h6>Username: </h6>
                    <input type="text" onChange={onChange} name="username"/>
                </div>
                <div>
                    <h6>Email Address: </h6>
                    <input type="text" onChange={onChange} name="email"/>
                </div>
                <div>
                    <h6>Password: </h6>
                    <input type="text" onChange={onChange} name="password" />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>

    );
};
export default HookForm;