import './header.scss'

class Header {
  constructor(props) {
    this.props = props
  }

  bindEvent() {
    const { router } = this.props

    // 이벤트 위임 설명
    // https://jsfiddle.net/2hf310r6/2/
    document.querySelector('.wrap_user').addEventListener('click', (e) => {
      if (e.target.className === 'btn_signin') {
        router.push('/signin')
      }
      if (e.target.className === 'thumbnail') {
        router.push('/my')
      }
    })

    // 로그 클릭시 메인 페이지 이동
    document
      .querySelector('.wrap_header .logo')
      .addEventListener('click', () => {
        router.push('/')
      })
  }

  render() {
    const { user } = this.props

    return `
          <div class="wrap_header">
              <img class="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="로고"/>
              <div class="wrap_user">
                  ${
                    user
                      ? `
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
