import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
          <Route path="/login" component={withErrorHandler(Login)} />
          <Route path="/signup" component={withErrorHandler(Signup)} />
          <Route path="/category/:id" component={withErrorHandler(Category)} />
          <Route
            path="/add-category"
            component={withErrorHandler(AddCategory)}
          />
          <Route path="/add-item" component={withErrorHandler(AddItem)} />
          <Route path="/dashboard" component={withErrorHandler(Dashboard)} />
          <Route path="/" component={() => <Redirect to="/dashboard" />} />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
