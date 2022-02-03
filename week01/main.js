'use strict';
import { question, questionInt } from 'readline-sync';
// javascript에서 출력 시 %s, %d 방식 사용하지 않음 -> `${}` 방식 사용


// 문제1
// const firstName = question("이름을 입력하세요.\n");
// console.log("hello" + firstName);

//문제2
// const firstName = question("이름을 입력하세요.\n");
// const lastName = question("성을 입력하세요.\n");
// console.log(`${firstName}, ${lastName}`);

// 문제3
// console.log("What do you call a bear with no teeth?\nA gummy bear!");


//문제4 Number 사용 시 문자를 입력했을 경우 에러 발생하지 않음 -> 0, 소수점 입력 시 모두 계산
// const firstNum = Number(question("첫번째 숫자를 입력하세요.\n"));
// const secdNum = Number(question("두번째 숫자를 입력하세요.\n"));
// console.log('The total is %d', firstNum + secdNum);

// 문제5 questionInt 사용 시 "Input valid number, please." 출력, 소수점 입력 시 정수 부분만 계산
// const firstNum = questionInt("첫번째 숫자를 입력하세요.\n");
// const secdNum = questionInt("두번째 숫자를 입력하세요.\n");
// const thridNum = questionInt("세번째 숫자를 입력하세요.\n");
// console.log('The total is %d', (firstNum + secdNum)*thridNum);

//문제6
// const firstNum = questionInt("처음의 피자 조각 개수를 입력하세요.\n");
// const secdNum = questionInt("몇 조각 먹었는지 개수를 입력하세요.\n");
// console.log("지금 남은 피자 조각 수는 %d입니다.", firstNum - secdNum);

//문제7
// const firstName = question("이름을 입력하세요.\n");
// const age = questionInt("나이를 입력하세요.\n") + 1;
// console.log("%s next birthday you will be %d", firstName, age);

//문제8
// const total = Number(question("총 결제 금액을 입력하세요.\n"));
// const count = questionInt("총 인원을 입력하세요.\n");
// console.log("1인당 결제 금액은 %d입니다.", total/count);

//문제9
// 1. 특정 날짜(MM/DD/YYYY)를 입력 받는다.
// 2. 입력 받은 날짜를 getTime() 메소드 사용하여 Millonseconds로 변경한다.
// 3. 현재 시간을 getTime() 메소드 사용하여 Millonseconds로 변경한다.
// 4. 2번의 값 - 3번의 값 하여 남은 Millonseconds를 구한다. 
// 5. 4번에서 구한 값을 시간, 분, 초로 출력한다.
// const date = question("YYYY-MM-DD 형태로 미래 특정 날짜를 입력하세요.\n")
// const dateMillonsec = new Date(date).getTime()
// const nowMillonsec = new Date().getTime()
// const remainMillonsec = Math.floor((dateMillonsec - nowMillonsec)/1000)
// const remainHour = Math.floor(remainMillonsec/3600)
// const remainMinute = Math.floor(remainMillonsec%3600/60)
// const remainSec = Math.floor(remainMillonsec%3600%60)
// console.log("%s까지 %s 시간, %s 분, %s 초 남았습니다.", date, remainHour, remainMinute, remainSec);
// -> 문제9 수정
// const days = Number(question("일수를 입력하세요.\n"));
// const h = days * 24
// const m = h * 60
// const s = m * 60 
// console.log(`${h}시간 또는 ${m}분 또는 ${s}초 남았습니다.`)

//문제10
// const weightKG = questionInt("몸무게(kg)를 입력하세요.\n")
// const weightPD = weightKG * 2.204
// console.log("입력한 몸무게를 파운드로 변환하면 %d파운드입니다.", weightPD)

//문제11
// const num1 = questionInt("100이상 숫자를 입력하세요.\n")
// const num2 = questionInt("10이하 숫자를 입력하세요.\n")
// console.log(`${num1} 안에 ${num2}가 약 ${Math.round(num1/num2)}번 들어갑니다.`)
