'user strict'
import * as fs from 'fs';
import { question } from 'readline-sync';

// 105
// ‘Numbers.txt’라는 이름의 새로운 파일을 생성한다. 한 줄에 쉼표로 구분된 다섯 개의 숫자를 추가한다.
// 프로그램을 실행하고 나서 이 프로그램이 저장된 위치에 해당 파일이 생성되었는지 확인한다.
// 여러분이 윈도우 시스템을 사용하고 있다면 이 파일을 메모장에 불러와서 확인하는 게 가장 쉽게 확인하는 방법일 것이다.
// const data = '1, 2, 3, 4, 5';
// fs.appendFileSync('../filesystem/Numbers.txt', data, (err)=>{
//     if (err){
//         console.log(err);
//     };
    
// })

// fs.readFile('../filesystem/Numbers.txt', (err, data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
//     
// })



// 106
// ‘Names.txt’라는 이름의 새로운 파일을 생성한다. 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다.
// 프로그램을 실행한 후에 이 프로그램이 저장된 위치에 해당 파일이 제대로 생성되었는지 확인하라.

// const data = ['Linda', 'Rose', 'Tom', 'Steven', 'David'];

// data.forEach((value)=>{
//     const name = value + '\n';
//     fs.appendFile('../filesystem/Names.txt', name, (err)=>{
//         if (err){
//             console.log(err);
//         };
//     });
// });

// 107
// ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.
// fs.open('../filesystem/Names.txt', 'r', (err, fd)=>{
//     if (err){
//         console.log(err);
//     };
//     fs.read(fd, (err,br, bf)=>{
//         if (err){
//             console.log(err);
//         };
//         const data = bf.toString();
//         console.log(data);
//     })
//     fs.close(fd, ()=> console.log("close fs"));
// })

// 108
// ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
//입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.
// fs.open('../filesystem/Names.txt', 'a+', (err, fd)=>{
//     if (err){
//         console.log(`open error: ${err}`);
//     };
//     const newName = question("새로운 이름을 입력하세요.\n");
//     fs.writeSync(fd, newName, -1, (err, written, str )=>{
//         if (err){
//             console.log(`write error: ${err}`);
//         };

//         console.log(`writter: ${written}, string:${str}`);
//     });
//     try{
//         const data = fs.readFileSync('../filesystem/Names.txt'); //매개 변수를 fd 입력하면 읽지 못함??
//         const stringData = data.toString();
//         console.log(stringData);
//     }catch(err){
//         console.log(err);

//     }
//     fs.close(fd, ()=> console.log("close fs"));
// });


// 109
// 사용자에게 다음과 같이 메뉴를 표시하라

// Create a new file
// Display the file
// Add a new item to the file Make a selection 1, 2 or 3:

// 사용자에게 1, 2 또는 3을 입력하라고 요청한다. 다른 것을 입력한다면 에러 메시지를 출력한다.
// 만약 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다. 기존 파일이 있다면 새 파일로 덮어쓰게 된다
// 2를 선택하면 'Subject.txt' 파일의 내용을 출력한다
// 3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.
// console.log('1. Create a new file\n2. Display the file\n3. Add a new item to the file Make a selection 1, 2 or 3');
// const selection = question("위 1, 2, 3 중 선택하여 입력하세요.\n");
// switch(selection){
//     case '1':
//         const subject = question("과목명을 입력하세요.\n");
//         fs.writeFile('../filesystem/Subject.txt', subject, (err)=>{
//             if(err) throw err;
//             console.log('The file has been saved!')
//         });
//         break;
//     case '2':
//         fs.readFile('../filesystem/Subject.txt', (err, data)=>{
//             if(err) throw err;
//             console.log(data.toString());
//         });
//         break;
//     case '3':
//         const newSubject = question("새로운 과목명을 입력하세요.\n");
//         fs.appendFileSync('../filesystem/Subject.txt', newSubject);
//         fs.readFile('../filesystem/Subject.txt', (err, data)=>{
//             if(err) throw err;
//             console.log(data.toString());
//         });
//         break;
//     default: 
//         console.log('invalid input');
// }

// 110
// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.
// const bufferData = fs.readFileSync('../filesystem/Names.txt');
// const stringData = bufferData.toString();
// const arrayData = stringData.split('\n')
// arrayData.pop();
// console.log(arrayData);
// const name = question("위 이름 중 하나 선택하여 입력하세요.\n");
// arrayData.forEach((value, index)=>{
//     if(value === name) {
//         arrayData.splice(index, 1);
//     }
// })
// arrayData.forEach((value)=>{
//     const name = value + '\n';
//     fs.appendFile('../filesystem/Names2.txt', name, (err)=>{
//         if (err){
//             console.log(err);
//         };
//     });
// });




//질문: 
//1. sync: sync사용한 메소드가 작업 끝나고 다음 작업 시작? 
//2. fs.writefile()/fs.readfile()에 fs.open() 먼저 실행되는 건지? 
//3. flag 옵션: fs.writefile()/fs.readfile() 매개 변수에는 flag 옵션을 사용하는 경우가 있는지?
//4. file descriptor: fs.writefile()/fs.readfile() 매개 변수에 fd 넣으면 동작하지 않음? 
