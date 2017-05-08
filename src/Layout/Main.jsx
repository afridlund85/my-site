import React from 'react'
import PropTypes from 'prop-types'

import './main.scss'

const Main = ({children}) => (
  <div id="main">
    <div id="content">
      {children}
    </div>
  </div>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
