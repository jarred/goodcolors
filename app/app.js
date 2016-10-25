import 'tachyons'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import {Tool} from './tool/'

const App = () => (
  <BrowserRouter>
    <div>
      <div className="mb4">
        <strong>Good Colors</strong> is a tool for generating responsible color combinations.
        <br />Add some colors to get started.
      </div>
      <Match exactly pattern="/" component={Tool} />
    </div>
  </BrowserRouter>
)

render(
  <App />,
  document.getElementById('gc-app')
);
