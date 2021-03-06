class Router {
  // constructor 생성자가 만들어 질 때 한번만 동작
  constructor(routes) {
    this.routes = routes
    this.bindEvent()
    this.render() // 최초 진입시 hash 상태에 따라 페이지를 그린다
  }

  bindEvent() {
    // hash 값이 바뀔 때 마다 동작
    window.onhashchange = () => {
      this.render()
    }
  }

  // 최초 진입시, hash 값이 바뀌었을때 변경된 내용을 반영한다.
  render() {
    // #main => /main
    const path = window.location.hash.replace('#', '/') || '/'
    const Component = this.routes[path]

    if (Component) {
      new Component()
    } else {
      const ErrorComponent = this.routes['/error']
      new ErrorComponent()
    }
  }
}

export default Router
