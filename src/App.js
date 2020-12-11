import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// container
import withAuth from './containers/Auth/withAuth'

// pages
import LoginPage from './pages/Login'
import MainPage from './pages/Main'
import NotFoundPage from './pages/404'

// styles
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/main' component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
