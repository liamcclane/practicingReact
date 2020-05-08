import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import './static/bootstrap.css';

import NavBar from './components/NavBar';
import Welcome from './components/landing/Welcome'

import AnotherForm from './components/moreForms/AnotherForm';
import BoxGen from './components/boxGenerator/BoxGen';
import Hook from './components/hooks/Hook';
import Tab from './components/funWithTabs/Tab';
import ToDoList from './components/toDoList/ToDoList';
import PokeAPI from './components/PokeAPI';
import Checkerboard from './components/checkerboard/Checkerboard';

function App() {
  const [projects, setProjects] = useState([{
    name: "Box Generator",
    url:"BoxGen",
    description: "In this project users can input valid colors and heights that will render boxes on the page",
    toolsLearned: ["forms", "imports"]
  }, {
    name: "Fun With Tabs",
    url:"FunWithTabs",
    description: "In this project users can click on different tabs that will open and close components without routing or refreshing",
    toolsLearned: ["forms", "imports", "passing parameters back and forth"]
  }, {
    name: "Hooks",
    url:"Hooks",
    description: "In this project users can click on different tabs that will open and close components without routing or refreshing",
    toolsLearned: ["Hooks", "imports"]
  }, {
    name: "More Forms",
    url:"MoreForms",
    description: "In this project users can click on different tabs that will open and close components without routing or refreshing",
    toolsLearned: ["live variable updates", "imports"]
  }, {
    name: "To Do List",
    url:"ToDoList",
    description: "In this project users can click on different tabs that will open and close components without routing or refreshing",
    toolsLearned: ["altering states", "imports", "passing parameters back and forth"]
  }, {
    name: "Poke API",
    url:"PokeAPI",
    description: "In this project users can click on different tabs that will open and close components without routing or refreshing",
    toolsLearned: [
      "altering states",
      "imports",
      "passing parameters back and forth",
      "dealing with Promises",
      "importing Axios",
      "importing Bootstrap"
    ]
  }
  ])
  

  return (
    <div className="App">
      <NavBar projects={projects} />
      <div className="container">
        <Router>
          <Welcome path="/" projects={projects}/>
          <BoxGen path="/BoxGen" />
          <Checkerboard path="Checkerboard/:heightSquares/:widthSquares/:color1/:color2"/>
          <Checkerboard path="Checkerboard/"/>
          <Tab path="/FunWithTabs" />
          <Hook path="/Hooks"/>
          <AnotherForm path="/MoreForms" />
          <ToDoList path="/ToDoList" />
          <PokeAPI path="/PokeAPI" />
        </Router>
      </div>
    </div>
  );
}

export default App;
