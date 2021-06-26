import './header.scss'

class Header {
  constructor(props) {
    this.props = props
  }

  bindEvent() {
    const { router, onSignout } = this.props

    // 이벤트 위임 설명
    // https://jsfiddle.net/2hf310r6/2/
    document.querySelector('.wrap_user').addEventListener('click', (e) => {
      if (e.target.className === 'btn_signout') {
        onSignout()
      }
      if (e.target.className === 'btn_signin') {
        router.push('/signin')
      }
    })
  }

  render() {
    const { user } = this.props

    return `
          <div class="wrap_header">
              <div class="wrap_user">
                  ${
                    user
                      ? `
                      <button class="btn_signout">로그아웃</button>
                      <img class="thumbnail" src="${user.thumbnail}">
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
