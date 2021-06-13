/**
 * Javascript 타입 O
 *
 * - 원시타입
 * String = 문자열
 * Number = 숫자
 * Boolean = 논리값
 * Null = Null
 * Undefined = Undefined
 * Symbol = Symbol
 *
 * - 객체
 * Object = Object
 * Function = Object
 */

console.log(typeof '이름')
console.log(typeof 10)

/**
 * Null vs Undefined
 *
 * null = 정말 아무 것도 없는 상태
 * undefined = 선언은되어있지만 값이 할당되지 않은 상태
 */

console.dir({})

function foo() {}
console.dir(foo)

/**
 * TypeScript
 */

// function add(a: number, b: number): number {
//   return a + b
// }
