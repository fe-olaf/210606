import Header from '../components/main/header'

class MainPage {
  constructor(props) {
    this.app = document.getElementById('app')
    this.children = []
    this.user = JSON.parse(window.localStorage.getItem('user') || 'null')
    this.props = props

    this.componentUpdate()
  }

  updateChildrenProps() {
    this.children = [
      new Header({
        parent: this.app,
        router: this.props.router,
        onSignout: this.handleSingout.bind(this),
        user: this.user,
      }),
    ]
  }

  // 컴포넌트에 변화가 일어나면 동작하는 함수
  componentUpdate() {
    this.updateChildrenProps()
    this.render()
    this.componentbindEvent()
  }

  handleSingout() {
    this.user = null
    window.localStorage.removeItem('user')

    this.componentUpdate()
  }

  componentbindEvent() {
    this.children.forEach((children) => children.bindEvent())
  }

  render() {
    this.app.innerHTML = this.children.reduce((html, children) => {
      return `${html}${children.render()}`
    }, ``)
  }
}

export default MainPage
