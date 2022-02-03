
'use strict';
import { question, questionInt } from 'readline-sync';
// 문제1
// const firstName = question("이름을 입력하세요");
// console.log("hello" + firstName);

//문제2
// const firstName = question("이름을 입력하세요");
// const lastName = question("성을 입력하세요");
// console.log(firstName +" "+ lastName);

// 문제3
// console.log("What do you call a bear with no teeth?\nA gummy bear!");


// 문제4
// const firstNum = questionInt("첫번째 숫자를 입력하세요.\n");
// const secdNum = questionInt("두번째 숫자를 입력하세요.\n");
// console.log('The total is %d', firstNum + secdNum);

// 문제5

const firstNum = questionInt("첫번째 숫자를 입력하세요.\n");
const secdNum = questionInt("두번째 숫자를 입력하세요.\n");
const thridNum = questionInt("세번째 숫자를 입력하세요.\n");
console.log('The total is %d', (firstNum + secdNum)*thridNum);

