import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ToDoComponent } from './components//todo/toDoForm';
import { WelcomeComponent } from './components/WelcomeComponent';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/route">To-Do-Component</Link>
        <Route to="/" exact component={WelcomeComponent}/>
        <Route path='/route' exact component={ToDoComponent} />
       
      </div>
      </Router>
    );
  }
}

export default App;
