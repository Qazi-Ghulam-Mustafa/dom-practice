var inputResult = document.getElementById("inputResult")

function number(num) {
    // console.log(num)
    inputResult.value += num
    var lastValue = inputResult.value.slice(inputResult.length, inputResult.length - 1)
    console.log(lastValue)
    // if () {

    // }
}

function equal() {
    inputResult.value = eval(inputResult.value)
}

function clear() {
    inputResult.value = ""
}