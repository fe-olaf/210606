import './feed.scss'

class Feed {
  constructor(props) {
    this.props = props
  }

  bindEvent() {}

  render() {
    if (!this.props.feeds.length) {
      return ``
    }

    return `
        <div class="wrap_feed">
            <ul>
                ${this.props.feeds.reduce(
                  (elements, feed) => `
                    ${elements}
                    <li class="feed">
                        <div class="header">
                            <img src="${feed.thumbnail}" alt="유저 이미지" />
                            <div class="info">
                                <div class="txt_name">${feed.name}</div>
                                <div class="txt_location">${feed.location}</div>
                            </div>
                        </div>
                        <div>
                        <img src="${feed.imageUrl}" alt="메인 이미지""/>
                    </li>
                `,
                  ``,
                )}
            </ul>
        </div>
    `
  }
}

export default Feed
