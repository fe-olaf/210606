import './signin.scss'

class SinginPage {
  constructor({ push }) {
    this.app = document.getElementById('app')
    this.render()
    this.bindEvent()
    this.router = {
      push,
    }
  }

  bindEvent() {
    this.app
      .querySelector('.btn_signin')
      .addEventListener('click', async () => {
        const email = document.getElementById('email').value
        const pw = document.getElementById('pw').value

        if (!email || !pw) {
          window.alert('필수 정보를 입력해주세요')
          return
        }

        const response = await fetch('http://localhost:3000/users')

        if (response.ok) {
          const users = await response.json()

          const user = users.find((user) => user.email === email)

          if (!user || user.password !== pw) {
            window.alert('아이디 또는 비밀번호를 확인해주세요')
            return
          }

          window.localStorage.setItem('user', JSON.stringify(user))
          this.router.push('/')
        }
      })
  }

  render() {
    this.app.innerHTML = `
        <div class="wrap_signin">
            <input id="email" placeholder="이메일을 입력해주세요"/>
            <input id="pw" placeholder="비밀번호를 입력해주세요" type="password" />

            <button class="btn_signin">로그인</button>
        </div>
    `
  }
}

export default SinginPage
