import Header from '../components/shared/header'

import './my.scss'

class MyPage {
  constructor(props) {
    this.app = document.getElementById('app')
    this.children = []
    this.user = JSON.parse(window.localStorage.getItem('user') || 'null')
    this.props = props

    if (!this.user) {
      this.props.router.push('/signin')
      return
    }

    this.componentUpdate()
  }

  componentUpdate() {
    this.updateChildrenProps()
    this.render()
    this.componentbindEvent()
    this.bindEvent()
  }

  updateChildrenProps() {
    this.children = [
      new Header({
        router: this.props.router,
        user: this.user,
      }),
    ]
  }

  handleSingout() {
    window.localStorage.removeItem('user')

    this.props.router.push('/')
  }

  componentbindEvent() {
    this.children.forEach((children) => children.bindEvent())
  }

  bindEvent() {
    this.app.querySelector('.btn_logout').addEventListener('click', (e) => {
      this.handleSingout()
    })
  }

  render() {
    const { name, thumbnail } = this.user

    this.app.innerHTML = `
        ${this.children[0].render()}
        <div class="wrap_profile">
           <img class="thumbnail" src="${thumbnail}" alt="유저 이미지"/>
           <div class="wrap_info">
               <h2 class="name">${name}</h2> 
               <button class="btn_logout">로그아웃</button>
           </div>
        </div>
    `
  }
}

export default MyPage
