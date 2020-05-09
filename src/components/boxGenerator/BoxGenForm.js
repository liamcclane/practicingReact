import React, { useState } from "react";
// import './../../static/bootstrap.css';

const BoxGenForm = ({ state, setState }) => {

    // const { state, setState } = props;
    const [color, setColor] = useState('');
    const [height, setHeight] = useState("100");

    // functions
    const createBox = (e) => {
        e.preventDefault();
        const newestObj = {
            style: {
                display: "inline-block",
                outline: "1px solid black",
                backgroundColor: color,
                color: "lightblue",
                height: height + "px"
            },
            color: color,
            height: height
        }
        console.log(newestObj);
        setColor("");
        setHeight(100);
        setState(state.concat([newestObj]));
        // // alternative way to write this
        // setState([...state, {
        //     style: {
        //         display: "inline-block",
        //         border: "3px solid " + color,
        //         height: height + "px"
        //     },
        //     color: color,
        //     height: height
        // }])
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
            <form onSubmit={createBox} className="form-row">
                <div className="col">
                    <input className="form-control" placeholder="color"
                        value={color} type="text" onChange={colorHandler} />
                </div>
                <div className="col">
                    <input className="form-control" value={height}
                        type="number" max="400" min="10" step="5"
                        onChange={heightHandler} />
                </div>
                <input type="submit" className="btn btn-small btn-outline-info" value="create a new box" />
            </form>
        </>
    )
}

export default BoxGenForm; 