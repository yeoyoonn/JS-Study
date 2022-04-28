//async & await : promise 보다 단결한 방법, 무조건 좋은 것 아님

//1. async 

// async function fetchUser(){
//     return 'e';
// }

// fetchUser().then(console.log);

//2. await: 완료할때 까지 기다린다.
async function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}


// getApple() 1초, getBanana() 1초 총 2초 소요되기에 아래 Promise api 사용
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
async function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOneFruit(){
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOneFruit().then(console.log);



