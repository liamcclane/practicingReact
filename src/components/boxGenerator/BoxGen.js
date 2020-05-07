import React, { useState } from 'react';

import BoxGenFrom from './BoxGenForm';
import BoxGenDisplay from './BoxGenDisplay';

const BoxGen = (props) => {
    const [state, setState] = useState([]);
    // console.log("state");
    // console.log(state);

    return (
        <>
            <h1>Hello and Welcome, lets make some boxes</h1>
            <p>Just input a valid color and height for the box and it will be outlined in that color</p>
            <BoxGenFrom state={state} setState={setState} />
            {state.map((val,i) => <BoxGenDisplay key={i} singleBoxDetails={val} />)}
            {/* <div style={{display:"inline-block", color: 'red', height: "300px", border:'4px solid red' }}>
                Placeholder
            </div> */}
        </>
    )
};

export default BoxGen;
