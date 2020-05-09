import React from 'react';
import { Link } from '@reach/router';
import reactLogo from './../static/darkReactLogo.png'
import './../static/bootstrap.css';

const NavBar = (props) => {
    const { projects } = props;
    return (
        <div className="navbar navbar-light bg-dark">
            <div className="container">
                <img src={reactLogo} className="d-inline-block align-top" height="50" width="50" alt="react logo"></img>
                <ul className="row list-unstyled">
                    <Link to="/"
                        className="btn btn-small btn-outline-secondary ml-2"
                    >HOME</Link>
                    {projects.map((val, i) => {
                        return (
                            <li>
                                <Link to={val.url}
                                    className="btn btn-small btn-outline-secondary ml-2"
                                >{val.name}</Link>
                            </li>
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
                </ul>
            </div>
        </div>
    )
}
export default NavBar;