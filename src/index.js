import React from 'react'
import { render } from 'react-dom'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import history from './lib/history'
import Loading from './components/Loading'

const PageAbout = Loadable({loader: () => import('./pages/PageAbout'), loading: Loading})
const PageTerms = Loadable({loader: () => import('./pages/PageTerms'), loading: Loading})
const PageFeatures = Loadable({loader: () => import('./pages/PageFeatures'), loading: Loading})
const PageCustomerStories = Loadable({loader: () => import('./pages/PageCustomerStories'), loading: Loading})
const PagePricing = Loadable({loader: () => import('./pages/PagePricing'), loading: Loading})
const PageHome = Loadable({loader: () => import('./pages/PageHome'), loading: Loading})
const PageNotFound = Loadable({loader: () => import('./pages/PageNotFound'), loading: Loading})

const BrowserRouter = ({children}) => (<ReactRouter history={history}>{children}</ReactRouter>)

const Router = () => (
  <Switch>
    <Route exact path='/about' component={PageAbout} />
    <Route exact path='/terms' component={PageTerms} />
    <Route exact path='/features' component={PageFeatures} />
    <Route exact path='/stories' component={PageCustomerStories} />
    <Route exact path='/pricing' component={PagePricing} />
    <Route exact path='/' component={PageHome} />
    <Route component={PageNotFound} />
  </Switch>
)

render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('root'))
