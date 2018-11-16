/* **********  IMPORTS  ********** */
import
  React,
  { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch }      from 'react-router-dom';

import Header     from './components/Header';
import Home       from './components/Home';
import Playground from './components/Playground';
import UpdateList from './components/UpdateList';
import NotFound   from './components/NotFound';

// import './App.css';


/* **********  APP COMPONENT  ********** */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <Header />
          <Switch>
            <Route exact path="/"                           component = { Home } />
            <Route exact path="/playground"                 component = { Playground } />
            <Route       path="/playground/:id/:name/:desc" component = { UpdateList } />
            <Route       path="/addcard"                    component = { UpdateList } />
            <Route                                          component = { NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


/* **********  EXPORTS  ********** */
export default App;
