import React, { useState } from 'react';
import './../../static/bootstrap.css';

import HookForm from './HookForm';
import HookDisplay from './HookDisplay';

const Hook = (p) => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cPassword: ""
    })
    return (
        <div className="row justify-content-around">
            <div className="container-fluid">
                <h1>Hooks!</h1>
                <p>This is how we pass live data back and forth form each other</p>

            </div>
            <HookForm inputs={user} setInputs={setUser} />
            <HookDisplay data={user} />
        </div>
    )


}

export default Hook;

