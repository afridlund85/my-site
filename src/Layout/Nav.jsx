import React from 'react'

import routes from './../routes'
import NavLi from './NavLi'
import './nav.scss'

const Nav = () => (
  <ul id="nav">
    {routes
      .filter(route => !!route.link)
      .map((route) => <NavLi key={route.path} {...route} />)
    }
  </ul>
)

export default Nav
