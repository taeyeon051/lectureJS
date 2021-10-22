const sunit = document.querySelector("#s-unit");
const tunit = document.querySelector("#t-unit");
let cmin = true;
const source = document.querySelector("#s-value");
const target = document.querySelector("#t-value");

function exUnit() {
    source.value = "";
    target.value = "";

    if (cmin) {
        cmin = false;
        sunit.innerHTML = "cm";
        tunit.innerHTML = "inch";
    } else {
        cmin = true;
        sunit.innerHTML = "inch";
        tunit.innerHTML = "cm";
    }
}

function converter() {
    if (cmin) target.value = (source.value * 2.54).toFixed(2);
    else target.value = (source.value / 2.54).toFixed(2);
}