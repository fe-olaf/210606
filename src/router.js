class Router {
  constructor(routes) {
    this.routes = routes
    this.event() // 후에
    this.render(window.location.hash) // 먼저
  }

  event() {
    window.onhashchange = () => {
      this.render(window.location.hash)
    }
  }

  push(pathName) {
    window.location.hash = pathName.replace('/', '#')
  }

  render(hash) {
    const path = hash.replace('#', '/') || '/'

    if (this.routes[path]) {
      new this.routes[path]({ router: { push: this.push } })
    } else {
      new this.routes['/error']()
    }
  }
}

export default Router
