function ex1_a() {
    document.querySelector("#exQuery").innerText = "a. 두 수를 입력받아서, 출력해 봅시다.";
    // 두 수를 입력받는다 prompt 사용.
    // 함수안에 선언된 num1과 num2는 함수와 라이브사이클이 같습니다.
    // 지역변수 num1, num2
    let num1 = prompt("첫번째 숫자를 입력하세요.", "0 ~ 99");
    let num2 = prompt("두번째 숫자를 입력하세요.", "0 ~ 99");
    
    // 출력
    document.querySelector("#exAnswer").innerText = `입력받은 두 수의 값은 : \n ${num1}과 ${num2}입니다.`;    
}

// 전역변수 선언
let num1, num2;
let exQuery = document.querySelector("#exQuery");
let exAnswer = document.querySelector("#exAnswer");

function ex1_b() {
    exQuery.innerText = "b. 두 수를 입력받아서, 두 수가 짝수인지 홀수인지 출력해 봅시다.";
    // 입력
    num1 = parseInt(prompt("첫번째 숫자를 입력하세요.", "0 ~ 99"));
    num2 = parseInt(prompt("두번째 숫자를 입력하세요.", "0 ~ 99"));

    // 지역변수 : 엘리먼트 생성 및 추가 _____ 첫번째 선언
    var p = document.createElement("p");
    var txt = document.createTextNode("");
    // num1 연산
    txt.nodeValue = num1 % 2 == 0 ? `${num1} : 짝수` : `${num1} : 홀수`;
    // p 태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);
    // 지역변수 : 엘리먼트 생성 및 추가 _____ 두번째 선언
    var p = document.createElement("p");
    var txt = document.createTextNode("");
    // num2 연산
    txt.nodeValue = num1 % 2 == 0 ? `${num1} : 짝수` : `${num1} : 홀수`;
    // p 태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);
}

function ex1_c2(num) {
    // 지역변수 : 엘리먼트 생성 및 추가
    let p = document.createElement("p");
    let txt = document.createTextNode("");
    // num1 연산
    txt.nodeValue = num % 2 == 0 ? `${num} : 짝수` : `${num} : 홀수`;
    // p 태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);
}

function ex1_c() {
    exQuery.innerText = "c. 두 수를 입력받아, 함수{ 짝수 or 홀수 출력. }를 작성합시다.";
    // 입력
    num1 = parseInt(prompt("첫번째 숫자를 입력하세요.", "0 ~ 99"));
    num2 = parseInt(prompt("두번째 숫자를 입력하세요.", "0 ~ 99"));
    // 출력할 함수
    ex1_c2(num1);
    ex1_c2(num2);
}