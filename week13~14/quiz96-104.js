'user strict'

import { question } from 'readline-sync';
import {questionInt } from 'readline-sync';


// 096
// 간단한 2차원 배열로 다음의 데이터를 생성하라.
//const array = [[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]];

// 097
// 사용자에게 행과 열을 선택하라고 요청하고, 096번 프로그램의 2차원 배열을 이용하여 해당 값을 출력하라.

// const array = [[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]];
// let column = questionInt("열 위치(0, 1, 2 중)를 입력하세요.");
// let row =  questionInt("행 위치(0, 1, 2, 3 중)를 입력하세요.");
// while (column !== (0, 1, 2)){
//     column = questionInt("0, 1, 2 중에서 열 위치를 입력하세요.");
// }
// while (row !== (0, 1, 2, 3)){
//     row = questionInt("0, 1, 2, 3 중에서 행 위치를 입력하세요.");
// }

// console.log(`선택한 값은 ${array[row][column]}입니다.`)


// 098
// 096번 프로그램의 2차원 배열을 이용하여 사용자에게 표시할 행을 요청하고 그 행을 출력한다.
// 새로운 값을 입력하라고 요청하고 그것을 표시한 행에 추가하고 그 행을 다시 출력하라.
//const array = [[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]];
// let row =  questionInt("행 위치(0, 1, 2, 3 중)를 입력하세요.");
// let arr1 = array[row];
// console.log(`선택한 행: ${arr1}`)
// row =  questionInt("다시 행 위치(0, 1, 2, 3 중)를 입력하세요.");
// const arr2 = arr1.concat(array[row])
// console.log(`새로운 행 추가 후: ${arr2}입니다.`)

// 099
// 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
// 열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
// 그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
// 마지막으로 그 행 전체를 다시 출력하라.
// function printArray(){
//     row =  questionInt("행 위치(0, 1, 2, 3 중)를 입력하세요.");
//     let arr1 = array[row];
//     console.log(`선택한 행: ${arr1}`)
//     column = questionInt("열 위치(0, 1, 2 중)를 입력하세요.");
//     console.log(`선택한 행의 열 값: ${arr1[column]}`)
// }
// const array = [[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]];
// let row;
// let column; 
// printArray();
// let re = question("값을 변경하시겠습니다까?(y/n)");
// if(re === "y"){
//      let newValue = questionInt("새로운 값을 입력하세요.");
//      array[row][cow] = newValue;
// }else if(re === "n"){
//     console.log("no retry")
// }else{
//     console.log("invaild input")
// }
// console.log(`최종 입력한 행은 ${array[row]}`)


// 100
// 객체(배열도 사용 가능)를 사용하여 각 사람이 서로 다른 지역에서 달성한 매출을 보여주는 다음의 데이터를 생성하라.
// const sales = {
//     John:{N: 3056, S: 8463, E: 8441, W: 2694},
//     Tom:{N: 4832, S: 6786, E: 4737, W: 3612},
//     Anne:{N: 5239, S: 4802, E: 5820, W: 1859},
//     Fiona:{N: 3904, S: 3645, E: 8821, W: 2451},
// }

// 101
// 100번 프로그램을 사용하여 사용자에게 이름과 지역을 입력하라고 요청하고 그와 관련된 데이터를 출력한다.
// 사용자에게 변경하려는 데이터의 이름과 지역을 사용자에게 묻고 매출 수치를 변경할 수 있도록 한다.
// 선택한 이름에 대한 모든 지역의 매출을 출력하라.
let name = question("이름을 입력하세요.");
let region = question("지역을 이력하세요.");
console.log(`조회한 데이터는 ${sales[name][region]}`);
name = question("변경할 이름을 입력하세요.");
region = question("변경할 지역을 이력하세요.");
let sale = questionInt("변경할 매출 수치를 이력하세요.");
sales[name][region] = sale;
console.log(sales[name]);
console.log(`조회한 데이터는 ${JSON.stringify(slaes[name])}`); //[Object Object]로 출력됨 ${}형태는 .tostring 형태를 사용함

// 102
// 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
// 입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라.
// let count = 4;
// let members = [];
// while(count > 0){
//     let data = question("순서대로 이름, 나이, 신발 사이즈를 입력하세요.(띄어쓰기하기)");
//     let member = data.split(' ');
//     let obj = {};
//     obj.name = member[0];
//     obj.age = member[1];
//     obj.size = member[2];
//     members.push(obj);
//     count--;
// }
// const name = question("조회할 이름을 입력하세요.");
// members.forEach((value)=>{
//     if (value.name === name){
//         console.log(`${name}의 나이는 ${value.age}이고 신발 사이즈는 ${value.size}입니다.`);
//     }
// })


// 103
// 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.
// members.forEach((value)=>{
//     console.log(`${value.name}의 나이는 ${value.age}입니다.`);
// })

// 104
// 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
// 입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라.

// const del = question("삭제할 이름을 입력하세요.");
// members.forEach((value, index)=>{
//     if (value.name === del){
//         members.splice(index, 1);
//     }
//     console.log(value);
// })
// members.forEach((value, index)=>{
//     console.log(value);
// })


