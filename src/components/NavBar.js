import React from 'react';
import { Link } from '@reach/router';
import reactLogo from './../static/darkReactLogo.png'
import './../static/bootstrap.css';

const NavBar = (props) => {
    const { projects } = props;
    return (
        <div className="navbar darkReact">
            <div className="container">
                <img src={reactLogo} className="d-inline-block align-top" height="50" width="50" alt="react logo"></img>
                <div className="row justify-content-around list-unstyled">
                    <Link to="/"
                        className="ml-2 blueReact"
                    >HOME</Link>
                    {projects.map((val, i) => {
                        return (
                            <div>
                                <Link to={val.url}
                                    className="ml-2 on-underline blueReact"
                                >{val.name}</Link>
                            </div>
                        )
                    })}
                    {/* <li>
                        <Link to="/BoxGen"
                            className="btn btn-small ml-2 btn-outline-secondary"
                        >Box Gen</Link>
                    </li>
                    <li
                        className="btn btn-small ml-2 btn-outline-secondary"
                        name="Fun With Tabs"
                    >
                        <Link to="/Tabs"></Link>
                    Fun With Tabs
                    </li>
                    <li
                        className="btn btn-small ml-2 btn-outline-secondary"
                        name="Hooks"
                    >
                        <Link to="/hooksProject"></Link>
                    Hooks
                </li>
                    <li
                        className="btn btn-small ml-2 btn-outline-secondary"
                        name="MoreForms"
                    >
                        <Link to="/anotherForm"></Link>
                    MoreForms
                </li>
                    <li
                        className="btn btn-small ml-2 btn-outline-secondary"
                        name="To Do List"
                    >
                        <Link to="/ToDoList"></Link>
                    To Do List
                </li>
                    <li
                        className="btn btn-small ml-2 mr-3 btn-outline-secondary"
                        name="PokeAPI"
                    >
                        <Link to="/pokeAPI"></Link>
                    PokeAPI
                </li> */}
                </div>
            </div>
        </div>
    )
}
export default NavBar;