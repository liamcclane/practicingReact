import React, { useState } from 'react';
import './../../static/bootstrap.css';

const Tab = (props) => {
    const [state, setState] = useState([{
        label: "Tab 1",
        content: "Something 1"
    }, {
        label: "Tab 2",
        content: "Something 2"
    }, {
        label: "Tab 3",
        content: "Something 3"
    }])
    const [text, setText] = useState(""); // this MUST be a state handler or you can't change it........ FUCK ME
    // handlers
    const clickHandler = (e, val) => {
        setText(val.content);
    }
    return (
        <>
            <h1>Click on a Tab and show some content</h1>
            <div className="navbar">
                {
                    state.map((val, i) => <div
                        className="btn btn-outline-primary"
                        key={i}
                        onClick={(e) => clickHandler(e, val)}
                    >{val.label}
                    </div>)
                }
            </div>
            <hr />
            <p>Text is {text}</p>
        </>
    )
}

export default Tab;