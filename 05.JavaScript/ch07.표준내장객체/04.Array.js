let cars = [ 'Audi', 'Benz', 'BMW', 'volvo'];
let car = cars.pop();
console.log(cars, car);
    
    
cars.push('Hundai');
console.log(cars);

//array를 생성
let persons = new Array('James', 'Maria');
console.log(persons);

//array 속성
console.log(cars.length, persons.length);

//array 정리
console.log('정렬 전', cars);
cars.sort();
console.log('정렬 후', cars);

//내림차순 정렬
cars.reverse();
console.log(cars);

// Array joun
console.log(cars.join(', '));

//문자열을 거꾸로 만들 수가 있음
let sample = '기러기 토마토 우영우';
let arr = sample.split(' ');
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.join(', '));
const reverseStr = sample.split('').reverse().join('');
console.log(reverseStr);
const rs = str => str.split('').reverse().join(''); //글자를 뒤집어주는 함수
console.log(rs('안녕하세요?'));

// 배열의 일부분을 반환
const fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(2));

//배열의 일부분 삭제해서 리턴
const res = fruits.splice(0, 2);
console.log(res);
console.log(fruits);

//객체의 배열을 정렬하라
let students = [
    {name:'james', eng:88, eng:78},
    {name:'maria', eng:98, eng:86},
    {name:'brian', eng:85, eng:94},
    {name:'tommy', eng:82, eng:89}
]
// 영어의 오름차순
/* students.sort(function(a, b){
    return a.eng - b.eng
}); */
// 수학의 내림차순
// students.sort((a, b) => b.math - a.math);
// 이름의 오름차순
students.sort((a, b) =>{
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})
console.log(students);