/**
 * Variable 선언
 *
 * 1) var: 사용 X (let, const로 대체)
 * 2) let
 * 3) const
 */

var name = '변수를 선언합니다.';    // '...': 문자로 인식
console.log(name);

var age = 22;
console.log(age);

let user = '회원';
console.log(user);

/**
 * var, let으로 변수 선언 시, 값의 변경이 가능하다.
 */

user = '회원A';   // 변수 값 변경
console.log(user);

/**
 * const로 변수 선언 시, 값의 변경이 불가하다.
 */

const cat = '고양이';  // 변수 값 변경 불가
console.log(cat);

// cat = '강아지'; => X

/**
 * [선언과 할당]
 * 1) 선언: 변수를 선언한다.
 * 2) 할당: 변수에 값을 넣는다.
 * 변수 선언 이후 할당하지 않을 시, 초기 값은 undefined(정의되지 않음)
 * const의 경우, 변수에 대한 할당이 반드시 이뤄져야 한다. => 값의 변경이 불가하기 때문
 */
var name;   // name이라는 변수를 선언한다. => 이 자체가 선언
name = '안녕하세요.';    // 변수에 값을 넣는다. => 할당
console.log(name);

var dog = '강아지';    // 선언과 동시에 할당
console.log(dog);