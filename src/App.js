import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state'

import TransparentNavbar from './components/TransparentNavbar'
import Home from './pages/Home'
import Hello from './pages/Hello'
import Info from './pages/Info'
import Photos from './pages/Photos'

const App = () => (
  <div>
    <TransparentNavbar />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hello' exact component={Hello} />
          <Route path='/info' exact component={Info} />
          <Route path='/photos' exact component={Photos} />
        </Switch>
      </Router>
    </Provider>
  </div>
)

export default App
