import Header from '../components/shared/header'

import { getUser } from '../utils/user'
import { render } from '../utils/render'

class MainPage {
  constructor() {
    this.root = document.getElementById('app')
    this.user = getUser()

    this.children = [] // 페이지 내부에서 그릴 컴포넌트들

    this.initialize() // (1) 초기값 세팅
  }

  // 초기 값을 세팅하기 위한 함수
  initialize() {
    // 비동기 값

    this.componentUpdate() // (2) 컴포넌트 변화를 전파
  }

  // 컴포넌트에 변화가 일어났을때 동작 => 결과적으론 다시 그려주는 함수
  // 1. updateChildrenProps => 변경된 값을 자식들에게 전파
  // 2. children (자식 컴포넌트) 를 다시 그린다.
  // 3. children (자식 컴포넌트) 이벤트를 다시 달아준다.
  componentUpdate() {
    this.updateChildrenProps() // (3)
    this.render() // (4)
    this.componentBindEvent() // (5)
  }

  // children => 페이지 내부에서 그려질 자식 컴포넌트들
  // 페이지내부의 값이 변경되면 자식들에게 다시 전파하는 함수
  updateChildrenProps() {
    this.children = [
      new Header({
        user: this.user,
      }),
    ]
  }

  // children (자식 컴포넌트) 이벤트를 다시 달아준다.
  componentBindEvent() {}

  // 자식들을 모아서 root 에 붙인다.
  render() {
    this.root.innerHTML = render(this.children)
  }
}

export default MainPage
