import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Router from './Router'

import './assets/css/normalize.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Router)

if (module.hot) {
  module.hot.accept('./Router', () => { render(Router) })
}
