// 호이스팅
// 변수 호이스팅, 함수 호이스팅

foo()

function foo() {}

/**
 * 변수 호이스팅
 */
console.log(name) // undefined => let, const = Error

var name = ''

// 실행 단계 =>
var name

console.log(name) // undefined

name = ''

// const, let

console.log(age)

let age = 20 // TDZ

let age;

console.log(age)

age = 20


// =====> 먼저 선언을하고 선언부 아래에서 사용하자 !

// 스코프 자바스크립트 스코프는 => 함수 스코프 

function foo () {
    // 스코프

    function inner () {
        // inner 스코프
    }
}

