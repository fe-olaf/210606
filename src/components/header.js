import './header.scss'

class Header {
  constructor({ router, user, onSignout }) {
    this.router = router
    this.user = user
    this.onSignout = onSignout
  }

  bindEvent() {
    // 이벤트 위임 설명
    document.querySelector('.wrap_user').addEventListener('click', (e) => {
      if (e.target.className === 'btn_signout') {
        this.user = null
        this.onSignout()
      }
      if (e.target.className === 'btn_signin') {
        this.router.push('/signin')
      }
    })
  }

  render() {
    return `
        <div class="wrap_header">
            <div class="wrap_user">
                ${
                  this.user
                    ? `
                    <button class="btn_signout">로그아웃</button>
                    <img class="thumbnail" src="${this.user.thumbnail}">
                `
                    : `
                    <button class="btn_signin">로그인</button>
                    `
                }
                
            </div>
        </div>`
  }
}

export default Header
