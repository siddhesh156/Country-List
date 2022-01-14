import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store, history } from './Redux/store';
import CountryDetails from './container/CountryDetails';

const App =() =>{
  return (
    <Provider store={store}>
    <Router history={history}>
        <Switch>
        <Route exact path="/" name="home" component={CountryDetails} />
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;
