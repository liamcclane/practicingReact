import React, { useState } from 'react';
import {Link} from '@reach/router';
import './../../static/bootstrap.css';

const ProjectDescription = props => {
    const { project } = props;
    return (
        <>
            <h2><Link className="blueReact" to={project.url}>{project.name}</Link></h2>
            <p>{project.description}</p>
            <hr />
            <h5>Cool Features</h5>
            <ul>
                {project.toolsLearned.map((val, i) => {
                    return (
                        <li key={i}>{val}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default ProjectDescription