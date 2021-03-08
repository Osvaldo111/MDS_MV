import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history";


import {
  HomePage,
  DetailStation
} from './Pages'

import './index.css'

export default function App() {
const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/station/:station_id" component={DetailStation} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);