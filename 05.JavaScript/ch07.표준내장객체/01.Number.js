// 기본 자료형 - primitive type
let number = 273.1;
let number2 = Number('273.1');

console.log(number === number2);

// 객체 자료형 - wrapper class
let numObj = new Number('273.1');

console.log(number == numObj);
console.log(number === numObj);

let str = '과자|1500'
console.log(str.split('|'));

let strObj = new String('과자|1500');
console.log(strObj.split('|'));

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());    //지수 형태
console.log(pi.toFixed(5));         //소숫점 이하 자릿수
console.log(pi.toPrecision(3));        //유효숫자 자리수

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53)-1);         //MAX_SAFE_INTEGER와 동일
