import 'tachyons'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

const App = () => (
  <BrowserRouter>
    <div>
      <strong>Good Colors</strong> is a tool for generating responsible color combinations. <a href="#colors=[rgb(255,255,255)]">View an example</a>
    </div>
  </BrowserRouter>
)

render(
  <App />,
  document.getElementById('gc-app')
);
