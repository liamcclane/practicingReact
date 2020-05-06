import React, { useState } from 'react';
import './../../static/bootstrap.css';

import ToDoForm from './ToDoForm';
import Listing from './Listing';

const ToDoList = (props) => {
    let [toDoList, setToDoList] = useState([]);
    return (
        <div className="wrapper">
            <h1>Let's make a to do list!</h1>
            <div className='pt-4 row justify-content-around'>
                <div className="col-4">
                    <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />
                </div>
                <div className="col-4">
                    <Listing toDoList={toDoList} setToDoList={setToDoList} />
                </div>
            </div>
        </div>
    )

}

export default ToDoList;