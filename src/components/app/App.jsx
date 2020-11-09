import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MyCalendar from '../Calendar/Calendar';
import Header from '../Header/Header';
import Form from '../Form/Form';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <MyCalendar />}
          />
          <Route 
            path="/form"
            exact
            render={() => <Form />}
          />
        </Switch>
      </Router>
    </Provider>
  );
}
