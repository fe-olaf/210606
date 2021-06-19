import Header from '../components/header'

class MainPage {
  constructor(props) {
    this.app = document.getElementById('app')
    this.user = JSON.parse(window.localStorage.getItem('user') || 'null')
    this.children = []
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

  componentUpdate() {
    this.updateChildrenProps()
    this.render()
    this.componentbindEvent()
  }

  componentbindEvent() {
    this.children.forEach((children) => children.bindEvent())
  }

  handleSingout() {
    this.user = null
    window.localStorage.removeItem('user')

    this.componentUpdate()
  }

  render() {
    this.app.innerHTML = this.children.reduce((html, children) => {
      return `${html}${children.render()}`
    }, ``)
  }
}

export default MainPage
