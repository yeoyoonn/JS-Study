'use strict';
import { questionFloat } from 'readline-sync';
import { question, questionInt } from 'readline-sync';

// //27
// let num1 = questionFloat('소수점 만은 숫자를 입력하세요\n')
// console.log(num1 * 2)

// //28
// console.log(num1.toFixed(2))

// //29
// let num2 = questionInt('500이상 숫자를 입력하세요\n')
// console.log(Math.sqrt(num2).toFixed(2))

// //30
// console.log(Math.PI.toFixed(5))

// //31
// let r = question('원의 반지름을 입력하세요\n')
// console.log(Math.PI * r**2)

//32 * 소수점 버림처리 함수 만들기!! 
// let r = question('원기둥의 반지름을 입력하세요\n')
// let d = question('원기둥의 깊이를 입력하세요\n')
// console.log((r * d).toFixed(3))

//33
// let n1 = question('첫번째 숫자를 입력하세요\n')
// let n2 = question('두번째 숫자를 입력하세요\n')
// let remain = n2%n1
// console.log(`${n2} is divided by ${n1} with ${remain}`)

// //34 ?사각형 면적이 있어야 너비를 구할 수 있음
// let n = questionInt('1와 2 중 임의 숫자를 입력하세요\n')
// if (n === 1){
//     let n = question('한면의 길이를 입력하세요\n')

// }else if (n ===2){
//     let u = question('삼각형 밑변를 입력하세요\n')
//     let h = question('삼각형 높이를 입력하세요\n')
//     console.log(u*h/2)
// }else if (n ===2){
// }else{
//     console.log("1 혹은 2만 입력 가능합니다.")
// }

// //35
// let name = question('이름을 입력하세요\n')
// for(let i = 3; i > 0; i--){
//     console.log(name)
// }

// //36
// let name = question('이름을 입력하세요\n')
// let c = questionInt('숫자를 입력하세요\n')
// for(c ; c > 0; c--){
//     console.log(name)
// }

// //37
// let name = question('이름을 입력하세요\n')
// let i = name.length
// for(i ;  i > 0; i--){
//     console.log(name.charAt(name.length-i))
// }

// //38
// let name = question('이름을 입력하세요\n')
// let c = questionInt('숫자를 입력하세요\n')
// for (c; c>0; c--){
//     let i = name.length
//     for(i; i > 0; i--){
//         console.log(name.charAt(name.length-i))
//     }
// }

//39
// let n = question('1~12 사이 숫자를 입력하세요\n')
// let i = 1
// for(i; i<13; i++){
//     console.log(`${n} * ${i} =${Number(n)*i}`);
// }

//40
// let n = question('50미만 숫자를 입력하세요\n')
// let i = 50
// for(i; i>=Number(n); i--){
//     console.log(i);
// }

// //41
// let name = question('이름을 입력하세요\n')
// let c = questionInt('숫자를 입력하세요\n')

// if (c < 10){
//     for(c ; c > 0; c--){

//         console.log(name)
//     }
// }else if (c >= 10){
//     console.log("1 혹은 2만 입력 가능합니다.")
// }else{
//     console.log("숫자만 입력 가능합니다.")
// }

// //42  
// let total = 0;
// for(let i = 5; i > 0; i--){
//     let c = question('숫자를 입력하세요\n');
//     let a = question('숫자를 더할건가요?\n');
//     if (a == 'yes'){
//         total = total + Number(c);
//         console.log(total)
//     }
// }


//43
// let c = questionInt('카운트 업(0) 혹은 다운(1) 중 선택하세요\n')
// if (c === 0){
//     let a = question('숫자를 입력하세요?\n')
//     let i = 1;
//     for(i; i<=Number(a); i++){
//         console.log(i)
//     }
// }else if (c===1){
//     let a = question('20미만의 숫자를 입력하세요?\n')
//     let i = 20;
//     for(i; i>=Number(a); i--){
//         console.log(i)
//     }
// }else{
//     console.log('i don\'t understand')
// }

//44
// let c = questionInt('파티에 몇명 초대하고 싶나요?\n')
// if (c < 10){
//     for(c; c>0; c--){
//         let a = question('이름을 입력하세요?\n')
//         console.log(`${a} has been invited`)
//     }
// }else if (c >= 10){
//     console.log('Too many people')
// }else{
//     console.log('i don\'t understand')
// }