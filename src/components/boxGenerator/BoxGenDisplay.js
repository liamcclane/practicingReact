import React from 'react';
import './../../static/bootstrap.css';

const BoxGenDisplay = (props) => {
    console.log(props);
    const style = props.singleBoxDetails.style;
    return (<div style={style} className="col-2 ml-1 p-2">
        Placeholder
        <div>color = {props.singleBoxDetails.color.length != 0 ? props.singleBoxDetails.color: "black"}</div>
        <div>height = {props.singleBoxDetails.height}</div>
        </div>)
}
export default BoxGenDisplay;