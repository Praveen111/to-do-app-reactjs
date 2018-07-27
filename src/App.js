import React, { Component } from 'react';
import './App.css';
import { ToDoComponent } from './components//todo/toDoForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ToDoComponent />
      </div>
    );
  }
}

export default App;
