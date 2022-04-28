'user strict'

import { question, questionInt } from 'readline-sync';

// 088
// 다섯 개의 정수를 입력받아 배열에 저장한다. 정렬을 한 후 역순으로 표시하라.

// let num = [];
// let i = 0;
// while(i < 5){
//     const n = questionInt("정수를 입력하세요.")
//     num.push(n);
//     i++;
// }
// num.sort((a, b) => {
//     return a - b;
// }).reverse()
// console.log(num)

// 089
// 정수들을 저장할 배열을 생성한다. 임의의 수 다섯 개를 생성하고 배열에 저장한다. 배열의 항목을 한 줄에 하나씩 출력하라.

// let num = [];
// let i = 0;
// while(i < 5){
//     const n = Math.floor(Math.random()*101);
//     num.push(n);
//     i++;
// }
// num.forEach((value) => console.log(value))

// 090
// 사용자에게 숫자를 입력하라고 요청한다. 10에서 20 사이의 숫자를 입력한다면 배열에 저장한다.
// 다른 값이라면 "Outside the range"라는 메시지를 출력한다.
// 다섯 개의 숫자가 입력되었다면 "Thank you" 메시지를 출력하고 배열의 항목을 한 줄에 하나씩 출력하라

// let num = [];
// let i = 0;
// while(i < 5){
//     const n = Number(question("10~20사이 숫자를 입력하세요."));
//     if (n > 20 | n < 10){
//         console.log("Outside the range");
//     }else{
//         num.push(n);
//         i++;
//     }
// }
// console.log("Thank you");
// num.forEach((value) => console.log(value));

// 091
// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.
// const num = [10, 20, 30, 10, 40];
// console.log(`배열: ${num}`);
// const n = Number(question("위의 배열 중 숫자 1개를 선택하여 입력하세요."));
// let conut = 0;
// num.forEach((value)=>{
//     if(value === n){
//         conut++;
//     } 
// })
// console.log(`입력한 숫자가 배열에 ${conut}개 있습니다.`)

// 092
// 두 개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.
// const num1 = [10, 20, 30, 10, 40];
// let num2 = [];
// let i = 0;
// while(i < 3){
//     const n = Number(question("숫자를 입력하세요."));
//     num2.push(n);
//     i++;
// }
// const array = num1.concat(num2);
// array.sort((a, b) => {
//     return a - b;
// })
// .forEach((value)=>{
//     console.log(value);
// })


// 093
// 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라
// let num = [];
// let newArr = [];
// let i = 0;
// while(i < 5){
//     const n = Number(question("숫자를 입력하세요."));
//     num.push(n);
//     i++;
// }
// num.sort((a, b) => {
//     return a - b;
// })
// console.log(`입력한 숫자 배열: ${num}`)
// const n = Number(question("위의 배열 중 숫자 1개를 선택하여 입력하세요."));
// num.forEach((value, index)=>{
//     if(value === n) {
//         newArr.push(num.splice(index, 1));
//     }
// })
// console.log(`기존 배열: ${num}`);
// console.log(`새로운 배열: ${newArr}`);

// 094
// 다섯 개의 숫자들을 가진 배열을 출력한다.
// 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
// 만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할 때까지 다시 요청하라.
// const num = [10, 30, 5, 1000, 99];
// console.log(`입력한 숫자 배열: ${num}`)
// let n = Number(question("위의 배열 중 숫자 1개를 선택하여 입력하세요."));
// while(!num.includes(n)){
//     n = Number(question("배열에 없는 숫자입니다. 위의 배열 중 숫자 1개를 선택하여 입력하세요."));
// }
// num.forEach((value, index)=>{
//     if(value === n) {
//         console.log(`선택한 숫자는 배열의 ${index}번째 위치에 있습니다.`);
//     }
// })

// 095
// 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
// 사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.
// 배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라.
// const num = [10.11, 20.22, 40.55, 50.66, 99.99];
// let n = questionInt("2~5 사이 정수 1개를 입력하세요.");
// while (n > 5 | n < 2){
//     console.log("Outside the range");
//     n = questionInt("2~5 사이 정수 1개를 입력하세요.");
// }
// num.forEach((value)=>{
//     const div = value / n;
//     console.log(Math.floor(div * 100)/100)
// })
