import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Hello from './Hello'

import './assets/css/normalize.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Hello)

if (module.hot) {
  module.hot.accept('./Hello', () => { render(Hello) })
}
