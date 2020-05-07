import React, { useState } from 'react';
import './App.css';

// import HookForm from './components/hooks/HookForm';
// import HookDisplay from './components/hooks/HookDisplay';
// import AnotherForm from './components/moreForms/AnotherForm';
// import BoxGen from './components/boxGenerator/BoxGen';
// import Tab from './components/funWithTabs/Tab';
// import ToDoList from './components/toDoList/ToDoList';
import PokeAPI from './components/PokeAPI';

function App() {

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: ""
  })

  return (
    <div className="App">
      {/* <HookForm inputs={state} setInputs={setState}/> */}
      {/* <HookDisplay data={state}/> */}
      {/* <hr/> */}
      {/* <AnotherForm /> */}
      {/* <BoxGen /> */}
      {/* <Tab /> */}
      {/* <ToDoList /> */}
      <PokeAPI />


    </div>
  );
}

export default App;
