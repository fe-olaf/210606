/**
 * []
 *
 * [10, 'string', true] X
 */

/**
 * 1. 배열의 값 추가
 *
 * push
 */
const jobs = ['디자이너', '개발자']

const newJobs = [...jobs, '기획자'] // 여기다가 작업을하고

console.log(newJobs)

/**
 * array.map
 * => 기존의 배열을 가지고 새로운 배열을 만든다.
 */

const numbers = [1, 2, 3, 4]

const result = numbers.map((n) => {
  return n * 2
})

console.log(numbers)
console.log(result)

/**
 * reduce
 * => 기존 배열을 가지고 무엇이든 만들 수 있는 함수
 *
 * 배열의 최고 값
 *
 * 이전의 값보다 지금의 값이 크다면 return
 */

const maxValue = numbers.reduce((prev, current) => {
  // 0, 1 => 1, 2
  return current > prev ? current : prev
}, 0)

console.log(maxValue)

/**
 * some, every
 * some = ||
 * every = &&
 */

numbers.every((n) => {
  return n === 1
})
numbers.some((n) => {
  return n === 1
})

/**
 * filter
 */

numbers.filter((n) => n !== 1)
