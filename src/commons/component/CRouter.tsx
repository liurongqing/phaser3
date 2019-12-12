import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { oc } from '@/utils'
export default ({ routes }) => (
  <Switch>
    {oc(routes)([]).map((route: any, key: number) => {
      return route.redirect ? (
        <Redirect key={key} from={route.from} to={route.to} exact />
      ) : (
        <Route
          key={key}
          exact={route.exact}
          path={route.path}
          render={props => {
            return <route.component {...props} routes={route.routes} />
          }}
        />
      )
    })}
  </Switch>
)
