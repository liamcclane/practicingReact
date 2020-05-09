import React from 'react';
import './../../static/bootstrap.css';

const BoxGenDisplay = (props) => {
    console.log(props);
    const style = props.singleBoxDetails.style;
    return (
        <div style={style} className="col-2 ml-1 mt-1 p-2">
            <div>{props.singleBoxDetails.color.length != 0 ? props.singleBoxDetails.color : "white"}</div>
            <div>{props.singleBoxDetails.height} pixels high</div>
        </div>
    )
}
export default BoxGenDisplay;