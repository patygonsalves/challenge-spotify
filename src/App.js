import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// container
import PrivateRoute from './containers/Auth/withAuth'

// pages
import LoginPage from './containers/Login'
import MainPage from './containers/Main'
import NotFoundPage from './pages/404'

// styles
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <PrivateRoute exact path='/main' component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch> 
    </BrowserRouter>
  )
}

export default App
