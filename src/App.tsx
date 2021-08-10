import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spin } from "antd"
import routes from '@/config/router'

function App() {
  return (
    <React.Suspense fallback={<Spin tip="Loading..." />}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </React.Suspense>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default App
