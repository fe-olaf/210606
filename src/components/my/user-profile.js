class UserProfile {
  constructor(props) {
    this.props = props
  }

  render() {
    const { name, thumbnail } = this.props.user

    return `
      <div class="wrap_profile">
        <img class="thumbnail" src="${thumbnail}" alt="유저 이미지" />
        <div class="wrap_info">
          <h2 class="name">${name}</h2>
          <button class="btn_logout">로그아웃</button>
        </div>
      </div>
      `
  }
}

export default UserProfile
