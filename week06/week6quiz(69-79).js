'user strict'

import { question, questionInt } from 'readline-sync';

// //69
// const country = ["Korea", "UK", "USA", "China", "Italy", "Japan"]
// console.log(country);
// const c = question("위의 국가 중 하나의 국가를 입력하세요\n");
// console.log(country.indexOf(c));

// //70
// const i = questionInt("0~5 중 숫자를 입력하세요\n");
// console.log(country.at(i))

// //71
// const sports = ["football", "tennis"]
// const s = question("좋아하는 스포츠를 입력하세요\n");
// sports.push(s);
// console.log(sports.sort());

// //72 splice(시작, 개수, 삽입items, 삽입items...)
// const subject = ["Math", "English", "History", "Science", "Physics"]
// const sub = question("좋아하지 않는 과목을 입력하세요\n");
// const i = subject.indexOf(sub);
// subject.splice(i, 1);
// console.log(subject);

// //73
// const f = new Array();
// for(let i = 1; i<5; i++){
//     const food = question("좋아하는 음식을 입력하세요\n");
//     f[i] = food;
// }
// f.forEach((value, index) => console.log(`${index}. ${value}`));

// const rem = question("제거할 음식을 입력하세요\n");
// f.splice(f.indexOf(rem), 1)
// console.log(f)

// //74 slice(시작, 끝미포함)
// const color =   ["Yellow", "Blue", "Red", "Black", "Green", "Pink", "White", "Gray", "Purple", "Brown"];
// const start = questionInt("0~4 사이의 숫자를 입력하세요\n");
// const last = questionInt("5~9 사이의 숫자를 입력하세요\n");
// console.log(color.slice(start, last+1));

// //75
// const num = [111, 222, 333, 444]
// num.forEach((value) => console.log(value));
// const n = questionInt("3자리 숫자를 입력하세요\n");
// if (num.includes(n)){
//     console.log(num.indexOf(n));
// }else{
//     console.log("That is not in the list");
// }

// //76
// const name = new Array();
// let i = 0;
// while(true){
//     const n = question("초대할 사람을 입력하세요\n");
//     name.push(n);
//     i = i + 1;
//     if (i >= 3){
//         let b = question("추가 초대할 사람이 있나요?(y/n)\n");
//         if (b === 'n'){
//             console.log(`초대한 사람은 총 ${name.length}명입니다.`);
//             break;
//         }else if (b === 'y'){
//             continue;
//         }else if (b !== 'n' || b !== 'y'){
//             console.log("wrong answer")
//         }
//     }
// }

// //77 
// const name = new Array();
// let i = 0;
// while(true){
//     const n = question("초대할 사람을 입력하세요\n");
//     name.push(n);
//     i = i + 1;
//     if (i >= 3){
//         let b = question("추가 초대할 사람이 있나요?(y/n)\n");
//         if (b === 'n'){
//             console.log(`초대한 사람은 총 ${name.length}명입니다.`);
//             break;
//         }else if (b === 'y'){
//             continue;
//         }else if (b !== 'n' || b !== 'y'){
//             console.log("wrong answer")
//         }
//     }
// }
// name.forEach((name, index) => console.log(`${index}. ${name}`));
// const x = question("이름 중 하나를 입력하세요\n");
// const index = name.indexOf(x);
// console.log(index);
// const q = question(`${x}를 초대하겠나요?(y/n)`);
// if (q === 'n'){
//     name.splice(index, 1);
//     name.forEach((name, index) => console.log(`${index}. ${name}`));
// }

// //78 arry.concat(arry)
// const program = ["x", "y", "z", "i"];
// program.forEach((name, index) => console.log(`${index}. ${name}`));
// const x = question("좋아하는 프로그램을 입력하세요\n");
// const i = questionInt("(0~4 중 원하는 위치를 고르세요\n");
// const pro1 = program.splice(i);
// program.push(x);
// const newProgram = program.concat(pro1);
// newProgram.forEach((name, index) => console.log(`${index}. ${name}`));

// //79
// const nums = [];
// for(let i =0; i<3; i++){ 
//     const x = question("숫자를 입력하세요\n");
//     nums.push(x);
//     console.log(nums)
// }
// let b = question("마지막 입력한 숫자를 저정하겠나요?(y/n)\n");
// if (b === 'n'){
//     nums.pop();
// }
// console.log(nums)