import React from 'react';
import './App.css';
import TodoList from './todoList';
import { LoginBlock } from './authPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">

      <header className="header">
          <div className={"logo"}>
              Kisa's ToDo
          </div>
      </header>
      <div className="content">
          <Switch>
              <Route path='/login' component={LoginBlock} />
              <Route path='/todo' component={TodoList} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
