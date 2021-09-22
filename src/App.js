import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ChangeLog from './pages/change log';
import Contact from './pages/contact';
import Movies from './pages/movies';
import Reflections from './pages/reflections';
//import Resources from './pages/resources';
import ToDoLists from './pages/todo list';

function App() {
  return (
    <div className="App">
      <h1>By: Ahilyn Dipre</h1>
      <h2>Hello World </h2>
      <h1>Welcome to Ahilyn's page!</h1>
      <p>Name: Ahilyn Dipre</p>
      <p>Major: Computer Science BS</p>
      <p>Pronouns: she/her/hers</p>
      <p> Contact Info: ahilynd@udel.edu</p>
      <p>New Main Repository?</p>
      <Router>
      <Navbar />
      <Switch>
         <Route path="/" exact component={Home} />
        < Route path='/about' component={About} />
        <Route path='/change log' component={ChangeLog} />
        <Route path='/contact' component={Contact} />
        <Route path='/movies' component={Movies} />
        <Route path='/todo list' component={ToDoLists} />
        <Route path='/reflections' component={Reflections} />
      </Switch>
      </Router>

    </div>
    
    
  );
}

export default App;
