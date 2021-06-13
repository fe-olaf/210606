/**
 * 모든 객체의 최상위
 * 정보를 구조화 할 때 사용
 */

const user = {
  name: '',
  age: '',
}

console.log(user['name'])
user['name'] = '재할당'

/**
 * 객체의 키값들만 빼오고 싶을때
 * Object.keys
 *
 * 값만 빼오고 싶을때
 * Object.values
 */

Object.keys(user)
Object.values(user)
