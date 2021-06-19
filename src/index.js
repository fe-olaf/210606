import Router from './router'

import MainPage from './pages/main'
import SigninPage from './pages/signin'
import ErrorPage from './pages/error'

import './reset.scss'

const ROUTES = {
  '/': MainPage,
  '/signin': SigninPage,
  '/error': ErrorPage,
}

class App {
  constructor() {
    this.router = new Router(ROUTES)
  }
}

new App()
