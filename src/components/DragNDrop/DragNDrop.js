import React, { useState, useRef } from 'react';

// importing other components
// importing css
import CSSClasses from './DragNDrop.module.css';
// importing static content

export default props => {

    const [list, setList] = useState([
        {
            "title": "To-do",
            "items": [
                { "headder": "clean", "description": "clean behind the sink" },
                { "headder": "laundry", "description": "finish all the piles or laundry" },
                { "headder": "exercise", "description": "go for at least a 20min walk in the park" },
            ]
        },
        {
            "title": "In-Progress",
            "items": [
                { "headder": "Do coding", "description": "get some coding done for the ProductPlan company" },
                { "headder": "Learn Drag and Drop", "description": "get intimate with some of the drag and drop built in features of react and all other languages" },
            ]
        },
        {
            "title": "Done",
            "items": [
                { "headder": "Sleep Well", "description": "get at least 8 hours of sleep and be well rested for the day" },
                { "headder": "Get Dressed", "description": "put clothes on so you aren't naked all day" },
            ]
        }
    ]);
    const [dragging, setDragging] = useState(false);
    const dragItemIndexes = useRef();
    const dragItemContext = useRef();

    const handleDragStart = (e, params) => {
        console.log("Starting dragging!!", params);
        dragItemIndexes.current = params;
        dragItemContext.current = e.target;
        dragItemContext.current.addEventListener('dragend', handelDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handelDragEnter = (e, params) => {
        const currentItem = dragItemIndexes.current;
        if (e.target != dragItemContext.current) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.grpInd].items.splice(params.itemInd, 0, newList[currentItem.grpInd].items.splice(currentItem.itemInd, 1)[0])
                dragItemIndexes.current = params;
                return newList;
            })
        }
    }

    const handelDragEnd = e => {
        console.log("drag ending ");
        dragItemContext.current.removeEventListener('dragend', handelDragEnd);
        dragItemIndexes.current = null;
        dragItemContext.current = null;
        setDragging(false);
    };

    const deleteItem = (e, params) => {
        console.log("in this function!!!")
        let modMe = JSON.parse(JSON.stringify(list));
        let arr = modMe[2].items;
        [arr[params.itemInd], arr[arr.length - 1]] = [arr[arr.length - 1], arr[params.itemInd]];
        arr.pop();
        modMe[2].items = arr;
        setList(modMe);
    }

    const getStyles = (params) => (
        params.grpInd == dragItemIndexes.current.grpInd &&
            params.itemInd == dragItemIndexes.current.itemInd
            ? [CSSClasses.item, CSSClasses.dragged].join(" ")
            : CSSClasses.item);

    return (
        <div className={CSSClasses.grpContainer}>
            {list.map((grp, grpInd) => (
                <div key={grpInd}
                    onDragEnter={dragging && grp.items.length == 0
                        ? e => handelDragEnter(e, { grpInd, itemInd: 0 })
                        // : dragging  
                        : null}
                    className={CSSClasses.grpbox}>
                    <h2>{grp.title}</h2>
                    {grp.items.map((item, itemInd) => (
                        <div key={itemInd} draggable
                            onDragStart={e => handleDragStart(e, { grpInd, itemInd })}
                            onDragEnter={dragging ? e => handelDragEnter(e, { grpInd, itemInd }) : null}
                            className={dragging ? getStyles({ grpInd, itemInd }) : CSSClasses.item}>
                            <h3>{item.headder}</h3>
                            <p>{item.description}</p>
                            {grpInd == 2
                                ? <div
                                    className={["btn", 'btn-outline-secondary'].join(" ")}
                                    onClick={e => deleteItem(e, { itemInd })}
                                >Delete ME</div>
                                : ""}
                        </div>
                    ))}
                </div>
            ))}
        </div >
    );
}

