const val1input = document.getElementById("value1");
const val2input = document.getElementById("value2");
const operatorSelect = document.getElementById("choice");
const formuleaArea = document.getElementById("formule");
const resultArea = document.getElementById("result");

val1input.addEventListener("input", calculate);
val2input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);

function calculate() {
    const val1 = parseFloat(val1input.value);
    const val2 = parseFloat(val2input.value);
    const operator = operatorSelect.value;

    if (isNaN(val1) || isNaN(val2)) {
        formuleaArea.textContent = "計算式:";
        resultArea.textContent = "両方の数値を入力してください";
        return;
    }

    let result;
    let symbol; // 演算子の記号 (+ - × ÷) を表示用に変換

    if (operator === "addition") {
        result = val1 + val2;
        symbol = "+";
    } else if (operator === "subtraction"){
        result = val1 - val2;
        symbol = "-";
    } else if (operator === "multiplication"){
        result = val1 * val2
        symbol = "*";
    } else if (operator === "division") {
        if (val2 === 0) {
            formuleaArea.textContent = "計算式:";
            resultArea.textContent = "0で割ることは出来ません。";
            return;
        }
        result = val1 / val2;
        symbol = "÷";
    } else {
        formuleaArea.textContent = "計算式:";
        resultArea.textContent = "演算子が正しくありません。";
        return;
    }

    formuleaArea.textContent = "計算式:${val1} ${symbol} ${val2}";
    result.textContent = "計算結果:${result}";
}