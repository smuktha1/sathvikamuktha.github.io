const screen = document.getElementById("screen");

function appendToDisplay(input){
    screen.value += input;
}

function clear(){
    screen.value = " ";
}

function calculate(){
        screen.value = eval(screen.value);

}