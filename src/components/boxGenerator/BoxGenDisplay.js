import React from 'react';

const BoxGenDisplay = (props) => {
    console.log(props);
    const style = props.singleBoxDetails.style;
    return (<div style={style}>
        Placeholder
        <div>color = {props.singleBoxDetails.color}</div>
        <div>height = {props.singleBoxDetails.height}</div>
        </div>)
}
export default BoxGenDisplay;