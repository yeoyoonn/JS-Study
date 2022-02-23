'use strict';
import { keyIn, question, questionInt } from 'readline-sync';

// 12
// let firstNum = question('첫번째 숫자를 입력하세요\n');
// let secdNum = question('두번째 숫자를 입력하세요\n');

// if (firstNum > secdNum){
//     console.log(secdNum)
// }else{
//     console.log(firstNum, secdNum)
// }

//13
// let num1 = question('20보다 작은 숫자를 입력하세요\n');

// if (num1 >= 20){
//     console.log('Too high')
// }else{
//     console.log('Thank you')
// }

// //14
// let num2 = question('10~20사이(포함)의 작은 숫자를 입력하세요\n');

// if (num2 <= 20 && num2 >= 10){
//     console.log('Thank you')
// }else{
//     console.log('Incorrect answer')
// }

// //15
// let color = question('좋아하는 색을 영문으로 입력하세요\n');

// if (color === 'RED' || color === 'red' || color === 'Red'){
//     console.log('I LIKE TOO');
// }else{
//     console.log('I DON\'T LIKE THAT COLOR, I PREFER RED');
// }

// //16
// let rain = question('비가 오나요?\n');
// if (rain.toLowerCase() === 'yes'){
//     let wind = question('바람이 부나요?\n')
//     if (wind.toLowerCase() === 'yes'){
//         console.log("it is too windy for an umbrella");
//     }else{
//         console.log('take an umbrella')
//     }
// }else{
//     console.log('enjoy your day')
// }

//17
// let age = question('나이를 입력하세요\n');

// if (age >= 18){
//     console.log('you can vote');
// }else if (age == 17){
//     console.log('you can learn to drive');
// }else if (age == 16){
//     console.log('you can buy a lottery ticket')
// }else{
//     console.log('you can go Trick-or-Treating')
// }

// //18 
// let num1 = questionInt('숫자를 입력하세요\n');

// if (num1 < 10){
//     console.log('Too Low')
// }else if (num1 <= 20 && num1 >= 10){
//     console.log('Correct')
// }

// //19
// let num1 = questionInt('1, 2, 3 중 숫자를 입력하세요\n');
// switch (num1){
//     case 1:
//         console.log('thank you');
//         break;
//     case 2:
//         console.log('well done');
//         break;
//     case 3:
//         console.log('correct')
//         break;
// }

// //20
// let name = question('이름을 입력하세요\n')
// console.log(name.length) 

// //21
// let firstname = question('이름을 입력하세요\n')
// let lastname = question('성을 입력하세요\n')
// console.log(`${firstname} ${lastname}`) 

// //22
// let firstname = question('소문자로 이름을 입력하세요\n')
// let lastname = question('소문자로 성을 입력하세요\n')
// let upperFrist = firstname.charAt(0).toUpperCase() + firstname.slice(1)
// let upperLast = lastname.charAt(0).toUpperCase()+ lastname.slice(1)
// console.log(`${upperFrist} ${upperLast}`) 

// //23
// let song = question('자장가 한 줄을 입력하세요\n')
// console.log(song.length)
// let start = question('시작할 자릿수 입력하세요\n')
// let end = question('끝날 자릿수 입력하세요\n')
// console.log(song.substring(start-1, end))

// //24
// let an = question('무엇이든 입력하세요\n')
// console.log(an.toLocaleUpperCase())

// //25
// let name = question('이름을 입력하세요\n')
// if (name.length<5){
//     let last = question('성을 입력하세요\n')
//     console.log(`${name.toUpperCase()}${last.toUpperCase()}`)
// }else{
//     console.log(name.toLowerCase())
// }

//26 모음 찾아서 if 조건문에 넣기 or 연산자 사용
// let an = question('무엇이든 입력하세요\n')

// if (an.charAt(0) == 'A' || an.charAt(0) == 'a' ){
//     let mo = an.slice(1)+an.charAt(0)+"way"
//     console.log(mo.toLowerCase())
// }else{
//     let za = an.slice(1)+an.charAt(0)+"ay"
//     console.log(za.toLowerCase())
// }

