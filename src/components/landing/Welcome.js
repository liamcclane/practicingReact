import React, { useState } from 'react';
import './../../static/bootstrap.css';
import ProjectDescription from './ProjectDescriptions';

const Welcome = props => {
    const { projects } = props;
    return (
        <>
            <h1>Welcome!</h1>
            <div className="row justify-content-center">
                <p>This is my react playground, click on the navigation bar to click around to the projects</p>
            </div>
            <div className="row justify-content-center">
                {projects.map((val, i) => {
                    return (
                        <div className="col-3 border rounded m-2">
                            <ProjectDescription project={val} key={i} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Welcome 