/**
 * Naming Conventions
 * 1. 일반적으로 영어(라틴 문자)를 사용하며, 문자와 숫자 모두 사용 가능하다.
 * 2. 변수 이름 작성 시, 특수 기호는 _(언더 스코어), $(달러) 사용 가능하다.
 * 3. 변수 이름은 숫자로 시작할 수 없다. => 1Name, 2Hello (X)
 * 4. 키워드는 변수 이름으로 사용할 수 없다. => var const = 'var'; (X)
 */

let codeFactory = '코드 팩토리';
var $user = 'user';
const _soojin = '수진';

console.log(codeFactory);
console.log($user);
console.log(_soojin);

// let 1Name = 'no'; (X, 변수 이름 숫자로 시작 불가)
// let const = 'attention'; (X, 키워드 사용 불가)

/**
 * Naming Conventions + a
 * 1. camelCase: 첫 글자는 소문자, 띄어쓰기 이후 첫 글자는 대문자 (대부분의 언어에서 다수 사용)
 * 2. snake_case: 단어 사이를 _(언더 스코어)로 묶기 (Python과 같은 언어에서 사용)
 * 3. PascalCase: 단어 첫 글자는 모두 대문자 (C#, 마이크로소프트 계열의 언어에서 사용)
 */

const sooJin = '수진';    // camelCase
console.log(sooJin);