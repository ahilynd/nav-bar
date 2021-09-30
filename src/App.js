import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ChangeLog from './pages/change log';
import Contact from './pages/contact';
import Applications from './pages/my apps';
import Reflections from './pages/reflections';
import Resources from './pages/resources';
import ToDoLists from './pages/todo list';
import MyRepository from './pages/my repository';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
         <Route path='/home/' exact component={Home} />
         <Route path='/about/' component={About} />
         <Route path='/change log/' component={ChangeLog} />
         <Route path='/contact/' component={Contact} />
         <Route path='/my apps/' component={Applications} />
         <Route path='/todo list/' component={ToDoLists} />
         <Route path='/reflections/' component={Reflections} />
         <Route path='/my repository/' component={MyRepository} />
         <Route path='/resources/' component={Resources} />


      </Switch>
      </Router>

    </div>
    
    
  );
}

export default App;
