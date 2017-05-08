import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
import App from './Layout/App'

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({path, exact, component: Component}) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <App {...props}>
            <Component {...props}/>
          </App>
        )} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
