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
import DragNDrop from './components/DragNDrop/DragNDrop';

function App() {
  const [projects, setProjects] = useState([{
    name: "Box Generator",
    url:"BoxGen",
    description: "Type in a color of the rainbow and a height and render boxes on the page!",
    toolsLearned: ["forms", "imports"]
  }, {
    name: "Fun With Tabs",
    url:"FunWithTabs",
    description: "Click on the fun tabs and see different components open and close without routing or refreshing",
    toolsLearned: ["forms", "imports", "passing parameters back and forth"]
  }, {
    name: "Hooks",
    url:"Hooks",
    description: "See live typing as parameters are passed between components.Create a long password to see a secrete message",
    toolsLearned: ["Hooks", "imports"]
  },
  //  {
  //   name: "More Forms",
  //   url:"MoreForms",
  //   description: "In this project users can click on different tabs that will open and close components without routing or refreshing",
  //   toolsLearned: ["live variable updates", "imports"]
  // }, 
  {
    name: "To Do List",
    url:"ToDoList",
    description: "Create a fun daily to-do list to help you set and make your goals",
    toolsLearned: ["altering states", "imports", "passing parameters back and forth"]
  }, {
    name: "Poke API",
    url:"PokeAPI",
    description: "Check out all the pokemon from V2, click on one of their names to see all of it's moves",
    toolsLearned: [
      "altering states",
      "API calls",
      "passing parameters back and forth",
      "dealing with Promises",
      "importing Axios",
      "importing Bootstrap",
      "parsing though objects"
    ]
  },
  {
    name: "Drag N Drop",
    url:"dragndrop",
    description: "home made drag and drop features",
    toolsLearned: ["altering state", "onDrag events"]
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
          {/* <AnotherForm path="/MoreForms" /> */}
          <ToDoList path="/ToDoList" />
          <PokeAPI path="/PokeAPI" />
          <DragNDrop path="/dragndrop" />
        </Router>
      </div>
    </div>
  );
}

export default App;
