import './header.scss'

class Header {
  constructor(props) {
    this.props = props
  }

  componentBindEvent() {}

  render() {
    const { user } = this.props

    return `
        <div class="wrap_header">
            <img class="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="로고"/>
            <div class="wrap_user">
                ${
                  user
                    ? `
                    <img class="thumbnail" src="${user.thumbnail}" alt="유저이미지"/>
                `
                    : `
                    <button class="btn_signin">로그인</button>
                    `
                }
            </div>
        </div>
      `
  }
}

export default Header
