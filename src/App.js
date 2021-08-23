import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import AddForm from './forms/AddForm';
import EditForm from './forms/EditForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact key="Home" component={Home} />
        <Route path="/create" exact key="AddForm" component={AddForm} />
        <Route path="/edit/:id" exact key="EditForm" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
