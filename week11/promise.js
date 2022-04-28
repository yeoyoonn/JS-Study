

//promist is a js object for asynchronous operation.


//1. producer
//when new Promise is created, the executor runs automatically.
const p = new Promise((rs, rj) =>{
    console.log('doing something');
    setTimeout(() => {
        //rs('ellie');
        rj(new Error('no network'));
    }, 2000);
});


//2. consumers: then, cach, finally
p
.then(value =>{
    console.log(value);
})
.catch(error =>{
    console.log(error);
})
.finally(()=>{
    console.log('finally');
})

//3.promise chaining
//4.Error handling

const getHen = () => new Promise((rs, rj)=>{
    setTimeout(()=>rs('chicken'), 1000);
});

const getEgg = (hen) => new Promise((rs, rj)=>{
    //setTimeout(()=>rs(`${hen}=>egg`), 1000);
    setTimeout(()=>rj(new Error(`error! ${hen}=>egg`)), 1000);
});

const cook = egg => new Promise((rs, rj)=>{
    setTimeout(()=>rs(`${egg}=>fried egg`), 1000);
})

getHen()
.then(h => getEgg(h))
.catch(error => {
    return 'bread';
})
.then(e => cook(e))
.then(f => console.log(f))
.catch((console.log));

// = 
// getHen()
// .then(getEgg)
// .then(cook)
// .then(console.log)