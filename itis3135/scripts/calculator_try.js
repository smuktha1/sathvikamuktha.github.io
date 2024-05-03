window.onload = function () {
    const result = document.getElementById("result");
    const clearButton = document.getElementById("clear");
    const clearEntryButton = document.getElementById("clearEntry");
    const divideButton = document.getElementById("divide");
    const multiplyButton = document.getElementById("multiply");
    const sevenButton = document.getElementById("seven");
    const eightButton = document.getElementById("eight");
    const nineButton = document.getElementById("nine");
    const subtractButton = document.getElementById("subtract");
    const fourButton = document.getElementById("four");
    const fiveButton = document.getElementById("five");
    const sixButton = document.getElementById("six");
    const addButton = document.getElementById("add");
    const oneButton = document.getElementById("one");
    const twoButton = document.getElementById("two");
    const threeButton = document.getElementById("three");
    const equalButton = document.getElementById("equal");
    const zeroButton = document.getElementById("zero");
    const decimalButton = document.getElementById("decimal");
  
    clearButton.onclick = clearResult;
    clearEntryButton.onclick = removeLastDigit;
    divideButton.onclick = () => appendToResult('/');
    multiplyButton.onclick = () => appendToResult('*');
    sevenButton.onclick = () => appendToResult('1');
    eightButton.onclick = () => appendToResult('2');
    nineButton.onclick = () => appendToResult('3');
    subtractButton.onclick = () => appendToResult('-');
    fourButton.onclick = () => appendToResult('4');
    fiveButton.onclick = () => appendToResult('5');
    sixButton.onclick = () => appendToResult('6');
    addButton.onclick = () => appendToResult('+');
    oneButton.onclick = () => appendToResult('7');
    twoButton.onclick = () => appendToResult('8');
    threeButton.onclick = () => appendToResult('9');
    equalButton.onclick = calcResult;
    zeroButton.onclick = () => appendToResult('0');
    decimalButton.onclick = () => appendToResult('.');
  
    // Essentially appends the given val to the current val in the result box
    function appendToResult(value) {
        result.value += value;
    }
  
    // Clears the result when user clicks C
    function clearResult() {
        result.value = "";
    }
  
    // Removes the last digit (when user user clicks CE) using the slice method: https://www.w3schools.com/jsref/jsref_slice_array.asp
    function removeLastDigit() {
        result.value = result.value.slice(0, -1);
    }
  
    // The actual calculating of the result the user enters using a try and catch statement: https://www.w3schools.com/js/js_errors.asp
    function calcResult() {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = "Error";
        }
    }
  };