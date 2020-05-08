import React, { useState } from 'react';

const HookForm = (props) => {
    console.log(`props`)
    console.log(props);

    const { inputs, setInputs } = props;

    const createUser = (e) => {
        e.preventDefault();
        console.log("tried to create user");
        const newUser = inputs;
        console.log("Welcome", newUser);
    };

    const onChange = (event) => {
        // console.log("the event parameter looks like");
        // console.log(event);
        console.log('inputs');
        console.log(inputs);
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div  className="col-5 border rounded">
            <form className="form-group row mt-4" onSubmit={createUser}>
                <div className="container-fluid">
                    <div className="row p-1">
                        <h6  className="col-3">Username: </h6>
                        <input className="form-control col-8 " type="text" onChange={onChange} name="username" />
                    </div>
                    <div className="row p-1">
                        <h6 className="col-3">Email Address: </h6>
                        <input className="form-control col-8 " type="text" onChange={onChange} name="email" />
                    </div>
                    <div className="row p-1">
                        <h6 className="col-3">Password: </h6>
                        <input className="form-control col-8 " type="text" onChange={onChange} name="password" />
                    </div>
                    <input className="btn btn-small btn-outline-success mt-3" type="submit" value="Create User" />
                </div>
            </form>
        </div>

    );
};
export default HookForm;