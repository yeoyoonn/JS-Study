
'use strict';
import { question, questionInt } from 'readline-sync';
// 문제1
// const firstName = question("이름을 입력하세요.\n");
// console.log("hello" + firstName);

//문제2
// const firstName = question("이름을 입력하세요.\n");
// const lastName = question("성을 입력하세요.\n");
// console.log("%s %s", firstName, lastName);

// 문제3
// console.log("What do you call a bear with no teeth?\nA gummy bear!");


// 문제4
// const firstNum = questionInt("첫번째 숫자를 입력하세요.\n");
// const secdNum = questionInt("두번째 숫자를 입력하세요.\n");
// console.log('The total is %d', firstNum + secdNum);

// 문제5
// const firstNum = questionInt("첫번째 숫자를 입력하세요.\n");
// const secdNum = questionInt("두번째 숫자를 입력하세요.\n");
// const thridNum = questionInt("세번째 숫자를 입력하세요.\n");
// console.log('The total is %d', (firstNum + secdNum)*thridNum);

//문제6
// const firstNum = questionInt("처음의 피자 조각 개수를 입력하세요.\n");
// const secdNum = questionInt("몇 조각 먹었는지 개수를 입력하세요.\n");
// console.log("지금 남은 피자 조각 수는 %d입니다.", firstNum - secdNum);

//문제7
const firstName = question("이름을 입력하세요.\n");
const age = questionInt("나이를 입력하세요.\n") + 1;
console.log("%s next birthday you will be %d", firstName, age);

