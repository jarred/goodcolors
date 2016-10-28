import 'tachyons';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Tool from './tool/';
import database from './reducers';

const store = createStore(database);

const App = () => (
  <BrowserRouter>
    <div>
      <div className="mb4-ns pa4 pa0-ns">
        <strong>Good Colors</strong> is a tool for generating responsible color combinations.
        <br/>Add some colors to get started.
      </div>
      <Match exactly pattern="/" component={Tool}/>
    </div>
  </BrowserRouter>
);

render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('gc-app') // eslint-disable-line no-undef
);
