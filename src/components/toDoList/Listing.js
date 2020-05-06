import React from 'react';

import './../../static/bootstrap.css';

const Listing = (props) => {
    const { toDoList, setToDoList } = props;
    const completedStyling = "list-group-item list-group-item-light";
    const notFinishedStyling = "list-group-item list-group-item-danger";
    const completeGoalHandler = (e,obj,ind) => {
        let completeGoal = {
            ...obj,
            isFinished: true
        }
        let arr = toDoList.slice(0,ind).concat([completeGoal]).concat(toDoList.slice(ind+1,toDoList.length));
        setToDoList(arr);
    }
    return (
        <>
            <h3>Your list for the day</h3>
            <ul className="list-group">
                {toDoList.map((val, i) => {
                    if (val.isFinished) {
                        return (
                            <li
                                className={completedStyling}
                                key={i}>
                                {val.title}
                            </li>
                        )
                    }
                    return (
                        <li
                            className={notFinishedStyling}
                            key={i}>
                            {val.title}
                            <div
                                className="btn btn-sm btn-outline-success ml-2"
                                onClick={(e) => completeGoalHandler(e, val, i)}
                            >Completed! YAY</div>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}

export default Listing;