import React, { useState } from 'react';
import './../../static/bootstrap.css';

const ToDoFrom = (props) => {
    const { toDoList, setToDoList } = props;
    const [title, setTitle] = useState("");
    // handler 
    const createGoal = (e) => {
        e.preventDefault();
        if(title.length < 3) return
        let arr = toDoList.concat([{
            title: title,
            isFinished: false
        }]);
        setTitle("");
        setToDoList(arr);
    }


    return (
        <div>
            <h3>Add A Goal to your list!</h3>
            <form
                className="form-group"
                onSubmit={createGoal}>
                <input
                    className='form-control'
                    type="text" 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}/>
                <input
                    type="submit"
                    className="btn btn-success m-3"
                    value="Add Goal" />
            </form>
        </div>
    )


}

export default ToDoFrom;