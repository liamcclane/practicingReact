import React, { useEffect, useState } from 'react';
import './../../static/bootstrap.css';

const Checkerboard = props => {
    // const { heightSquares, widthSquares, color1, color2 } = props;
    const [boardDetails, setBoardDetails] = useState({
        height: {
            numSqu: props.heightSquares,
            arr: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        width: {
            numSqu: props.widthSquares,
            arr: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        color1: props.color1,
        color2: props.color2
    });
    useEffect(() => {
        const heightArr = [], widthArr = [];
        if (!props.color1) {
            console.log("inside the props.color1===undefined")
            setBoardDetails({
                ...boardDetails,
                color1: "black"
            })
            console.log('boardDetails inside the undefinded props.color1');
            console.log(boardDetails);
        }
        if (!props.color2) {
            setBoardDetails({
                ...boardDetails,
                color2: "red"
            })
        }
        if (props.widthSquares) {
            for (let i = 0; i < props.widthSquares; i++) {
                widthArr.push("blah");
            }
            setBoardDetails({
                ...boardDetails,
                width: {
                    ...boardDetails.width,
                    arr: widthArr
                }
            })
        }
        if (props.heightSquares) {
            for (let i = 0; i < props.heightSquares; i++) {
                heightArr.push("blah");
            }
            setBoardDetails({
                ...boardDetails,
                height: {
                    ...boardDetails.height,
                    arr: heightArr
                }
            })
        }
    }, [])

    const styles = [{
        border: "2px solid " + boardDetails.color1,
        height: "50px",
        width: "50px"
    }, {
        border: "2px solid " + boardDetails.color2,
        height: "50px",
        width: "50px"
    }]

    return (
        <>
            <h1>Welcome to your custom Checkerboard</h1>
            <div>
                {boardDetails.height.arr.map((val, i) => {
                    return (
                        i % 2 == 0
                            ? (<div key={i} className="row justify-content-center">{boardDetails.width.arr.map((val, j) => {
                                return (
                                    j % 2 === 0
                                        ? (<div key={j} style={styles[1]}>A</div>)
                                        : (<div key={j} style={styles[0]}>B</div>)
                                )
                            })}</div>)
                            : (<div key={i} className="row justify-content-center">{boardDetails.width.arr.map((val, j) => {
                                return (
                                    j % 2 === 0
                                        ? (<div key={j} style={styles[0]}></div>)
                                        : (<div key={j} style={styles[1]}></div>)
                                )
                            })}</div>)
                    )
                })}
            </div>
        </>
    )
}


export default Checkerboard;