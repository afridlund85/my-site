import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import './app.scss'

const App = ({children}) => (
  <div id="wrap">
    <Header/>
    <Main>
      {children}
    </Main>
    <Footer/>
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
