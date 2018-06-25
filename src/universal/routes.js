import React from 'react'
import { Switch, Route } from 'react-router'
import App from '../app/containers/app/app'
import Home from '../app/containers/home/home'
import NotFound from '../app/containers/notFound/notFound'
import { fetchHomeData } from '../app/redux/sagas/home/homeSagas'

// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the asnyc function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  loadData: () => [[fetchHomeData]]
}, {
  component: NotFound
}];

export default function Router() {
  return (
    <App>
      <Switch>
        {routes.map(route => (
          <Route key={route.path || 'notfound'} {...route} />
        ))}
      </Switch>
    </App>
  );
}
