// 윈도우 객체 load
function winLoad(e) {
    alert(`${e.currentTarget} 객체가 ${e.type}되었습니다.`);
}

window.onload = winLoad;

// H1에 이벤트리스너 추가 (익명이너 함수)
document.querySelector("h1").addEventListener("click", () => {
    alert(`${this}를 클릭했습니다.`);
    alert(`${this.textContent}를 클릭했습니다.`);
});

// P에 이벤트리스너 추가 (call 외부함수)
function dbClick(e) {
    alert(`${e.currentTarget.textContent}를 더블클릭했습니다.`);
    alert(`${e.currentTarget.tagName}태그를 ${e.type}했습니다.`);
}

document.querySelector("#dbClk").addEventListener("dblclick", dbClick);

// Button에 이벤트리스너 추가
function over() {
    alert("첫번째버튼만 오버됩니다.");
}

document.querySelector("button").addEventListener("mouseover", over);

// Button들에 배경스타일 지정
let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.style.background = "aqua";
});

// Button들에 이벤트리스너 추가
function dbClkS(e) {
    alert(`${e.currentTarget.textContent}이 ${e.type}되었습니다.`);
}

btns.forEach(btn => {
    btn.addEventListener("dblclick", dbClkS);
});