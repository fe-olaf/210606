class ErrorPage {
  constructor() {
    this.app = document.getElementById('app')
  }

  render() {
    this.app.innerHTML = `
        <div>
            <h1>에러가 발생했습니다</h1>
        </div>`
  }
}

export default ErrorPage
