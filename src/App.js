import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import withErrorHandler from './hoc/withErrorHandler';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={withErrorHandler(Dashboard)} />
          <Route path="/" component={() => <Redirect to="/dashboard" />} />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
