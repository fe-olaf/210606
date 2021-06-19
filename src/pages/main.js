import Header from '../components/header'

class MainPage {
  constructor({ push }) {
    this.app = document.getElementById('app')
    this.router = { push }
    this.user = JSON.parse(window.localStorage.getItem('user') || 'null')

    this.header = new Header({
      router: this.router,
      user: this.user,
      onSignout: this.handleSingout.bind(this),
    })

    this.render()
  }

  bindEvent() {
    this.header.bindEvent()
  }

  handleSingout() {
    window.localStorage.removeItem('user')
    this.render()
  }

  render() {
    this.app.innerHTML = `
      ${this.header.render()}
    `

    this.bindEvent()
  }
}

export default MainPage
