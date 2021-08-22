import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fishery from './pages/Fishery'
import AddForm from './forms/AddForm';
import EditForm from './forms/EditForm';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact key="Home" component={Fishery} />
      <Route path="/create" exact key="Home" component={AddForm} />
      <Route path="/detail/:id" exact key="Home" component={EditForm} />
      <Route path="/edit/:id" exact key="Home" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
