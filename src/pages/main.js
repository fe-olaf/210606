import Header from '../components/shared/header'
import Story from '../components/main/story'

import { fetchFriends } from '../service/story'

class MainPage {
  constructor(props) {
    this.app = document.getElementById('app')
    this.children = []
    this.user = JSON.parse(window.localStorage.getItem('user') || 'null')
    this.props = props

    this.friends = []

    this.initiallize()
  }

  async initiallize() {
    if (this.user) {
      this.friends = await fetchFriends()
    }

    this.componentUpdate()
  }

  updateChildrenProps() {
    this.children = [
      new Header({
        router: this.props.router,
        user: this.user,
      }),
      new Story({
        friends: this.friends,
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
    this.friends = []

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
