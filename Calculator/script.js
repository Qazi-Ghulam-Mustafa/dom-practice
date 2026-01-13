var inputResult = document.getElementById("inputResult")
function number(num) {
    // console.log(num)
    // inputResult.value += num
    var lastValue = inputResult.value.toString().slice(inputResult.value.length - 1)
    console.log(lastValue)
    if (lastValue == "+" || lastValue == "-" || lastValue == "*" || lastValue == "/") {
        if (num == "+" || num == "-" || num == "*" || num == "/") {
            Toastify({
                text: "Enter Operator Only one Time",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b00000, #ff0404)",
                }
            }).showToast();
        }
        else {
            inputResult.value += num
        }
    } else {
        inputResult.value += num
    }
}
function equal() {
    inputResult.value = eval(inputResult.value)
}
function clearAll() {
    inputResult.value = ""

}
function backSpace() {
    inputResult.value = inputResult.value.toString().slice(0, inputResult.value.length - 1)
}
function newSet() {
    inputResult.value = `(-${inputResult.value})`
}
function square() {
    inputResult.value = inputResult.value * inputResult.value
}
function cube() {
    inputResult.value = inputResult.value * inputResult.value * inputResult.value
}
function squareRoot() {
    inputResult.value = Math.sqrt(inputResult.value)
}
function cubeRoot() {
    inputResult.value = Math.cbrt(inputResult.value)
}
function percentage() {
    inputResult.value=percentage
}