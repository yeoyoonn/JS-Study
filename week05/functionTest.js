// "user strict";

// //1
// function log(massage){
//     console.log(massage);
//     return 'return' + massage;
// }

// console.log(log(123));

// //2 default parmmetrs : 파라미터 전달되지 않은 경우 unknown 혹은 자체정의 
// function showMessage(massage, from = 'undef'){
//     console.log(message)
// }
// showMessage('sh')

// //3 rest paramters 
// function printAll(...args){
//     for(let i =0; i<args.length; i++){
//         console.log(arg[i]);
//     }

//     for(const arg of args){
//         console.log(arg);
//     }
// }

// //4 local scope: 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 

// //6. Return a value 


// //7 early return early exit 


// //0 function expression 
// // funcion declearion: 선언하기 전에 호출 가능 
// print();
// const print = function (){ //anonymous funcion
//     console.log(massage);
//     return 'return' + massage;
// }

// //callback function 




// //Arrow function : always anonymous function 
// const arrowtest = () => console.log('arrow function test');
// const sum = (a, b) => a+b; // return 값, 1줄만 작성 가능
// const simplemutiplay = (a, b) => {
//     let add = a + b; 
//     return add * a
// }

// // IIFE: Immediately Invoked function  Expression > 선언과 동시에 호출 가능!
// (function hello(){
//     console.log('hello')
// })();

// //arry .foreach()

