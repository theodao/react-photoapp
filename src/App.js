import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { compose } from './utils/helper';
import withErrorHandler from './hoc/withErrorHandler';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Category from './routes/Category';
import AddCategory from './routes/AddCategory';
import AddItem from './routes/AddItem';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            component={compose(withErrorHandler, withRouter)(Login)}
          />
          <Route
            path="/signup"
            component={compose(withErrorHandler, withRouter)(Signup)}
          />
          <Route
            path="/category/:id"
            component={compose(withErrorHandler, withRouter)(Category)}
          />
          <Route
            path="/add-category"
            component={compose(withErrorHandler, withRouter)(AddCategory)}
          />
          <Route
            path="/add-item"
            component={compose(withErrorHandler, withRouter)(AddItem)}
          />
          <Route
            path="/dashboard"
            component={compose(withErrorHandler, withRouter)(Dashboard)}
          />
          <Route path="/" component={() => <Redirect to="/dashboard" />} />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
