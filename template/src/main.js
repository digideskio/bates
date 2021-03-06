// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute, Redirect, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import {insertCssObject, start} from 'stijl'

import pkg from '../package.json'
import Home from './Home'
import PageView from './PageView'

document.title = pkg.name

insertCssObject({
  'html, body': {background: 'white', height: '100%', margin: 0},
  '#root': {height: '100%'},
})
const myExtension = {
  theme: {},
}
start([myExtension])

export class HotReloadHack extends React.Component {
  render() {return this.props.children}
}

ReactDOM.render(
  <Router history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path='/' component={HotReloadHack}>
      <IndexRoute component={Home}/>
      <Route path={'page/:path'} component={PageView}/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>,
  document.getElementById('root')
)
