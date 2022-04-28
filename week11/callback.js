'user strict'

//execut the code block by order after hoisting
//hoisting: var, function declaration 

console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');


//synchronous callback
function printIm(print){
    print();
    console.log('print hoisting');
}

printIm(()=>console.log('hello'))

//ayschronous callback

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('aysc callback'), 2000);