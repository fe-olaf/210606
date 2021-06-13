// +, -, *, %, /

// and && , or ||
// && = 모두 참
// || = 하나라도 참이라면 참

const bool1 = true // 항상 참
const bool2 = false // 이 친구가 간헐적으로 true, false
const bool3 = true // 항상 참

if (bool1 || bool2 || bool3) {
  console.log('참입니다')
}

/**
 * falsy
 * undefined, null, 0, ''
 */

const u = 0

if (u) {
  // 동작 X
}

/**
 * == vs ===
 */
console.log(5 == '5') // true <number === string>
console.log(5 === '5') // false <number === string>
