import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
// import store from './state'

import TransparentNavbar from './components/TransparentNavbar'
import Footer from './components/Footer'
import Test from './pages/Test'
import Hello from './pages/Hello'
import Info from './pages/Info'
import Photos from './pages/Photos'
import Tables from './pages/Tables'


const App = () => (
  <div>
    <TransparentNavbar />
    {/* <Provider store={store}> */}
      <Router>
        <Switch>
          <Route path='/' exact component={Info} />
          <Route path='/hello' exact component={Hello} />
          <Route path='/test' exact component={Test} />
          <Route path='/photos' exact component={Photos} />
          <Route path='/tables' exact component={Tables} />
        </Switch>
      </Router>
    {/* </Provider> */}
    <Footer />
  </div>
)

export default App
