import './story.scss'

class Story {
  constructor(props) {
    this.props = props
  }

  bindEvent() {}

  render() {
    if (!this.props.friends.length) {
      return ``
    }

    return `
          <div class="wrap_story">
            <ul class="wrap_friend">
              ${this.props.friends.reduce(
                (elements, friend) => `
                ${elements}
                <li class="friend">
                  <img src="${friend.thumbnail}" alt="유저 이미지"/>
                  <span>${friend.name}</span>
                </li>
              `,
                ``,
              )}
            </ul>
          </div>`
  }
}

export default Story
