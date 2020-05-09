import React, { useState } from 'react';

import BoxGenFrom from './BoxGenForm';
import BoxGenDisplay from './BoxGenDisplay';

const BoxGen = (props) => {
    const [state, setState] = useState([]);
    // console.log("state");
    // console.log(state);

    return (
        <div className="row justify-content-center">
            <div className="container-fluid">
                <h1 className="" >Box Generator</h1>
                <p className="">Just input a valid color and height for the box and it will be outlined in that color</p>
                <BoxGenFrom className="" state={state} setState={setState} />
            <hr />
            {state.map((val, i) => <BoxGenDisplay key={i} singleBoxDetails={val} />)}

            </div>
        </div>
    )
};

export default BoxGen;
