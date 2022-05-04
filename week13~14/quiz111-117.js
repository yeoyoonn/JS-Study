'user strict'
import * as fs from 'fs';
import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 111
// 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.
// fs.writeFile('../filesystem/Books.csv', 'No,Title,Author,Publication Date\n', (err)=>{
//     if(err) throw err;
// });

// 112
// 111번 프로그램에서 만든 Books.csv 파일을 사용한다. 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다. csv 파일의 각 행을 한 줄에 하나씩 출력하라.
// let i = 0;
// while(i<5){
//     const row = question(`표의 ${i}행 데이터를 ,로 분할하여 차례로 입력하세요,`) + '\n';
//     fs.appendFileSync('../filesystem/Books.csv', row);
//     i++;
// }
// const row = question(`표에 있는 데이터외 다른 레코드를 ,로 분할하여 입력하세요,`);
// fs.appendFileSync('../filesystem/Books.csv', row);
// const data = fs.readFileSync('../filesystem/Books.csv');
// console.log(data.toString());



// 113
// Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
// 모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고, 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.
// let i = 0;
// const c =  questionInt("레코드 몇 개 추가하고 싶은지 입력하세요\n");
// while(i<c){
//     const row = '\n' + question(`입력할 데이터를 ,로 분할하여 입력하세요,`) ;
//     fs.appendFileSync('../filesystem/Books.csv', row);
//     i++;
// }
// let search = [];
// const author =  question("검색할 저자 이름을 입력하세요\n");
// const data = fs.readFileSync('../filesystem/Books.csv').toString();
// const arrayData = data.split('\n');
// arrayData.forEach((value)=>{
//     const row = value.split(',');
//     if(row[2].toLowerCase() === author.toLowerCase()){
//         search.push(value)
//     }; 
// })
// if (search.length === 0) {
//     console.log('no result')
// }else{
//     search.forEach((value)=> console.log(value));
// };



// 114
// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다. 입력된 두 년도 사이에 출간된 모든 책을 출력하라.
// let search = [];
// const start =  questionInt("검색할 시작 년도를 입력하세요\n");
// const end =  questionInt("검색할 끝 년도를 입력하세요\n");
// const data = fs.readFileSync('../filesystem/Books.csv').toString();
// const arrayData = data.split('\n');
// arrayData.forEach((value)=>{
//     const row = value.split(',');
//     if(Number(row[3]) >= start && Number(row[3]) <= end ){
//         search.push(row[1])
//     }; 
// })
// if (search.length === 0) {
//     console.log('no result')
// }else{
//     search.forEach((value)=> console.log(value));
// };

// 115
// Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라.
// const data = fs.readFileSync('../filesystem/Books.csv').toString();
// console.log(data);

// 116
// Books.csv 파일의 데이터를 배열로 가져온다. 사용자에게 배열을 표시하고, 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
// 또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.

// const data = fs.readFileSync('../filesystem/Books.csv').toString();
// const arrayData = data.split('\n');

// console.log(arrayData);
// const rowDelete =  questionInt("위 배열에서 삭제할 행 번호를 입력하세요\n") + 1;
// if (rowDelete > arrayData.length - 1){
//     console.log('out of array rang')
// }else {
//     arrayData.splice(rowDelete, 1);
// }


// console.log(arrayData);
// const rowUpdate =  questionInt("위 배열에서수정할 행 번호를 입력하세요\n");
// if (rowUpdate > arrayData.length - 1){
//     console.log('out of array rang')
// }else {
//     arrayData[rowUpdate+1] = `${rowUpdate},To Kill A Mockingbird,Harper Lee,1960`
// }

// let newData = '';
// arrayData.forEach((value)=>{
//     newData = newData + value + '\n'
// })
// fs.writeFile('../filesystem/Books.csv', newData, (err)=> {
//     if(err) throw err;
// });


// 117
// 사용자의 이름을 묻는다.
// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
// 총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다. 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.

// const name = question("이름을 입력하세요.\n");
// let ques = '';
// let anwser = '';
// let score = 0;
// for(let i=2; i>0 ; i--){
//     const num1 = Number(question("첫번째 숫자를 입력하세요.\n"));
//     const num2 = Number(question("두번째 숫자를 입력하세요.\n"));
//     const sum = num1 + num2;
//     ques = ques + `${num1} + ${num2} = ? `;
//     console.log(`${num1} + ${num2} = ?`)
//     const ans = question("문제 답을 입력하세요.\n");
//     anwser = anwser + ans + ' '
//     if (Number(ans) === sum){
//         score = score + 1;
//     }
// }
// const data = `${name},${ques},${anwser},${score}\n`
// fs.appendFileSync('../filesystem/quiz.csv', data);
// const readData = fs.readFileSync('../filesystem/quiz.csv');
// console.log(readData.toString());



