// 'use strict';
// import { questionFloat } from 'readline-sync';
// import { question, questionInt } from 'readline-sync';

// // While 45
// let total = 0
// while (total < 50){
//     let n = question("숫자를 입력하세요\n");
//     total = total + Number(n);
//     console.log(`The total is ${total}`);
// }

// //46 
// let n = 0;
// while (n < 5){
//     n = Number(question("숫자를 입력하세요\n"))
// }
// console.log(`the last number you entered was a ${n}`)

// //47
// let total = Number(question("숫자를 입력하세요\n"));
// let a = "y";
// while (a === "y"){
//     let i = Number(question("다른 숫자를 입력하세요\n"));
//     total = total + i;
//     a = question("다른 숫자를 더 더하겠습니까?(y/n)\n");
// }
// console.log(`The total is ${total}`)

// //48
// let count = 0;
// let a = "y";
// while (a === "y"){
//     let n = question("초대하고 싶은 사람 이름을 입력하세요\n");
//     console.log(`${n} has now been invited`);
//     count = count + 1; 
//     a = question("다른 사람 초대하고 싶나요?(y/n)\n");
// }
// console.log(`The total is ${count}`)

// //49
// const compnum = 50;
// let count = 1
// let n = Number(question("숫자를 입력하세요\n"));;
// while (compnum !== n){
    
//     if ( compnum > n){
//         console.log("입력 값이 낮습니다. 다시 맞추세요");
//         count += 1;
//     }else{
//         console.log("입력 값이 높습니다. 다시 맞추세요");
//         count += 1;
//     }
//     n = Number(question("숫자를 입력하세요\n"));
// }
// console.log(`well done, you took ${count} attemps`);

// //50 
// let n = Number(question("숫자를 입력하세요\n"));

// while (n < 10 || n > 20){
//     if (n < 10){
//         console.log("Too Low");
//     }else{
//         console.log("Too High");
//     }
//     n = Number(question("숫자를 다시 입력하세요\n"));
// }
// console.log("Thank you")

// //51
// let total = 10; 
// let n;
// while(true){
//     console.log(`There are ${total} green bottles hanging on the wall, ${total} green bottles hanging on the wall, and if 1 green bottle should accidentally fall`);
//     total -=1;
//     if(total === 0){
//         console.log(`There are no more green bottles hanging on the wall`)
//         break;
//     }
//     n = questionInt("how many green bottles will be hanging on the wall?");
//     if (n === total){
//         console.log(`There are ${total} green bottles hanging on the wall`)
//         break;
//     }else{
//         console.log("no, try again")
//     }


// }

// //Random 52
// console.log(Math.floor(Math.random() * 100) + 1);

// //53
// let arr1 = ["딸기", "사과", "수박", "배", "포도"];
// console.log(arr1[Math.floor(Math.random() * 4)])

// //54
// const arr2 = ["h", "t"];
// const result = arr2[Math.floor(Math.random() * 2)];
// const q = question("앞(h),뒤(t)면 중에 한가지 선택하세요.\n");
// if (result === q){
//     console.log("You win!!!!");
// }else{
//     console.log("Bad luck");
// }
// console.log(`the result is ${result}`);

// //55
// const result = Math.floor(Math.random() * 5 + 1)
// console.log(`the result is ${result}`);
// let q = questionInt("1~5사이 숫자를 선택하세요.\n");
// if (q === result){
//     console.log("Well done!!!!");
// }else if(q > result){
//     console.log("Too high");
//     q = questionInt("1~5사이 숫자를 선택하세요.\n");
//     if (q === result){
//         console.log("Correct!!!!");
//     }else{
//         console.log("You lose");
//     }    
// }else{
//     console.log("Too low");
//     q = questionInt("1~5사이 숫자를 선택하세요.\n");
//     if (q === result){
//         console.log("Correct!!!!");
//     }else{
//         console.log("You lose");
//     }    
// }

// //56
// const result = Math.floor(Math.random() * 10 + 1)
// console.log(`the result is ${result}`);
// let q = 0;
// while(q !== result){
//     q = questionInt("1~10사이 숫자를 선택하세요.\n");
// }

// //57
// const result = Math.floor(Math.random() * 10 + 1)
// console.log(`the result is ${result}`);
// let q = 0;
// while(q !== result){
//     q = questionInt("1~10사이 숫자를 선택하세요.\n");
//     if(q > result){
//         console.log("Too high");  
//     }else{
//         console.log("Too low");
//     }
// }

// //58 0~9 까지 정수 
// let score = 0;
// for (let i=0; i<5; i++){
//     let n1 = Math.floor(Math.random() * 10);
//     console.log(`the n1 is ${n1}`);
//     let n2 = Math.floor(Math.random() * 10);
//     console.log(`the n2 is ${n2}`);
//     let result = n1 + n2;
//     console.log(`the result is ${n1 + n2}`);
//     let q = questionInt("정답(0~18)을 입력하세요.\n");
//     if (q === result){
//         score += 1;
//     }
// }
// console.log(`the score is ${score}`);

// //59 
// let arr3 = ["red", "blue", "yellow", "green", "black"];
// let result = "";
// let q;
// while(q !== result){
//     let result = arr3[Math.floor(Math.random() * 4)];
//     console.log(`the result is ${result}`);
//     q = question('"red", "blue", "yellow", "green", "black" 중 한가지를 선택하세요.\n');
//     if (q === result){
//         console.log("well done!!")
//         break;
//     }else{
//         switch(result){
//             case 'green' :
//                 console.log("I bet you are GREEN with envy");
//                 break;
//             case 'blue':
//                 console.log("You are probably feeling BLUE right now");
//                 break;
//             case 'black':
//                 console.log("A BLACK day for you");
//                 break;               
//             case 'red':
//                 console.log("You must see RED");
//                 break;
//             case 'yellow':
//                 console.log("Are you a YELLOW dog?");
//                 break;
//             default:
//                 console.log("something is wrong");
//                 break;
//         }
//     }
// }