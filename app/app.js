import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import { Home } from './home'
import { About } from './about'
import { NoMatch } from './errors'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />

      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>
)

render(
  <App />,
  document.getElementById('lust-app')
);
