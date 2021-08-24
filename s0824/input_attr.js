// 선택자를 변수에 담아서 사용해본다.
let btn = document.querySelector("#btn");
let btnStyle = document.querySelector("#btn").style;

function getDisabled() {
    btn.disabled = true;
    btnStyle.cursor = "none";
    btnStyle.background = "initial";
}

function getAbled() {
    btn.disabled = false;
    btnStyle.cursor = "pointer";
    btnStyle.background = "pink";
}

// 변수의 값은 콘솔에서 확인한다.
let result;

function getType() {
    result = "타입 : " + document.querySelector("#btn").type;
    console.log(result);
}

function getId() {
    result = "아이디 : " + document.querySelector("#btn").id;
    console.log(result);
}

function getClass() {
    result = "클래스 : " + document.querySelector("#btn").className;
    console.log(result);
}

function getName() {
    result = "이름 : " + document.querySelector("#btn").name;
    console.log(result);
}

function getValue() {
    result = "값 : " + document.querySelector("#btn").value;
    console.log(result);
}
