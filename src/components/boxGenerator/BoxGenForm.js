import React, { useState } from "react";

const BoxGenForm = (props) => {

    const {state, setState} = props;
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("100");

    // functions
    const createBox = (e) => {
        e.preventDefault();
        const newestObj = {
            style: {
                display: "inline-block",
                border: "3px solid " + color,
                height: height + "px"
            },
            color : color,
            height: height
        }
        console.log(newestObj);
        setColor("");
        setHeight(200);
        setState(state.concat([newestObj]));
    }

    // event handlers
    const colorHandler = (e) => {
        setColor(e.target.value);
    }
    const heightHandler = (e) => {
        setHeight(e.target.value);
    }

    return (
        <>
            <form onSubmit={createBox}>
                Color : <input placeholder="color example red" value={color} type="text" onChange={colorHandler} />
                Height : <input value={height} type="number" max="400" min="10" step="5" onChange={heightHandler} />
                <input type="submit" value="create a new box" />
            </form>
        </>
    )
}

export default BoxGenForm; 