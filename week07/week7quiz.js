'user strict'

import { question, questionInt } from 'readline-sync';

// 080
// 사용자에게 이름을 입력하라고 요청하고 입력된 이름의 길이를 출력한다.
// 그런 다음, 성을 입력 하라고 요청하고 성의 길이를 출력한다
// 성과 이름 사이에 공백 하나를 두어 결합하고 그 결과를 출력한다.
// '마지막으로, 공백을 포함한 전체 이름의 길이를 출력하라.


// const firstName = question("이름을 입력하세요.\n")
// console.log(`이름의 길이: ${firstName.length}`)
// const lastName = question("성을 입력하세요.\n")
// console.log(`성의 길이: ${lastName.length}`)
// const name = lastName + " " + firstName
// console.log(name)
// console.log(`전체 길이: ${name.length}`)

// 081 ? for in-> key/index 값 vs for of -> value
// 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.
// const subject = question("과목을 입력하세요.\n")
// for(const i of subject){
//     console.log(i + "-")
// }


// 082
// 시 한 구절을 사용자에게 표시하고 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다. 입력한 두 값 사이의 문자를 출력하라.
// const poem = "오늘 밤에도 별이 바람에 스치운다."
// const start = question("시작할 인덱스를 입력하세요.\n")
// const end = question("끝날 인덱스를 입력하세요.\n")

// console.log(poem.substring(start, end))


// 083
// 사용자에게 대문자로 메시지를 입력하라고 요청한다. 만약 메시지 에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.

// let condition = true;
// while (condition){
//     let character = question("대문자로 메시지를 입력하세요.\n");
//     for(const i in character){
//         console.log(`i = ${i}`)
//         if (character.charCodeAt(i) < 65 | character.charCodeAt(i) > 90){
//             break;
//         }
//         if (i == character.length - 1){
//             condition = false;
//         }
//     }
// }


// 084
// 사용자에게 영어 단어를 입력하라고 요청한다. 처음 두 개의 문자만 대문자로 출력하라.

// const word = question("영어 단어를 입력하세요.\n");
// const two = word.slice(0, 2).toUpperCase();
// const newWord = two + word.slice(2);
// console.log(newWord)


// 085
// 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라.
// const name = question("이름(영어)을 입력하세요.\n");
// let len;
// character.match(/a|e|i|o|u/g) === null ?  len = 0 :  len = character.match(/a|e|i|o|u/g).length
// console.log(`모음 개수는 ${len}개입니다.`)

// 086
// 사용자에게 새로운 비밀번호를 입력하라고 요청하고, 한 번 더 입력하라고 요청한다.
// 입력한 두 개의 비밀번호가 일치하면 "Thank you'"라고 출력한다.
// 만약 입력한 문자는 서로 일치하는데 대소문자가 틀리다면 "They must be in the same case"라고 출력한다.
// 문자가 일치하지 않는다면 "Incorrect" 메시지를 출력하라.
// const passwd = question("비밀번호를 입력하세요.\n");
// const newPasswd = question("새로운 비밀번호를 입력하세요.\n");

// if (passwd === newPasswd){
//     console.log("Thank you")
// }else if(passwd.toLowerCase() === newPasswd.toLowerCase()){
//     console.log("They must be in the same case")
// }else{
//     console.log("Incorrect")
// }

// 087
// 단어를 입력하라고 요청한 뒤, 그 단어의 문자를 한 줄 에 하나씩 거꾸로 출력하라. 예를 들어, 'Hello'라고 입 력했다면 다음과 같이 출력되어야 한다.
// const word = question("영어 단어를 입력하세요.\n");
// const reWord = word.split("").reverse();
// reWord.forEach((value) => console.log(value) )
