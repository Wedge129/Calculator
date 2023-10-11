var secondElement = "", firstElement = "",operator = null , result = "";


document.getElementById("resetButton").addEventListener("click", function () {
    console.log("ResetButtonClicked");
    firstElement = "";
    secondElement ="";
    result ="";
    operator = null;
    //console.log(operator);
});

document.getElementById("deleteButton").addEventListener("click", function () {
    console.log("DeleteButtonCLicked");
});

document.getElementById("number9").addEventListener("click", function () {
    console.log("Number9ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(9);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(9);
        console.log(secondElement);
    }
});

document.getElementById("number8").addEventListener("click", function () {
    console.log("Number8ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(8);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(8);
        console.log(secondElement);
    }
});

document.getElementById("number7").addEventListener("click", function () {
    console.log("Number7ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(7);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(7);
        console.log(secondElement);
    }
});

document.getElementById("number6").addEventListener("click", function () {
    console.log("Number6ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(6);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(6);
        console.log(secondElement);
    }
});

document.getElementById("number5").addEventListener("click", function () {
    console.log("Number5ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(5);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(5);
        console.log(secondElement);
    }
});

document.getElementById("number4").addEventListener("click", function () {
    console.log("Number4ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(4);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(4);
        console.log(secondElement);
    }
});

document.getElementById("number3").addEventListener("click", function () {
    console.log("Number3ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(3);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(3);
        console.log(secondElement);
    }
});

document.getElementById("number2").addEventListener("click", function () {
    console.log("Number2ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(2);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(2);
        console.log(secondElement);
    }
});

document.getElementById("number1").addEventListener("click", function () {
    console.log("Number1ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(1);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(1);
        console.log(secondElement);
    }
});

document.getElementById("number0").addEventListener("click", function () {
    console.log("Number0ButtonCLicked");
    if (operator == null) {
        firstElement = firstElement.concat(0);
        console.log(firstElement);
    } else {
        secondElement = secondElement.concat(0);
        console.log(secondElement);
    }
});

document.getElementById("addButton").addEventListener("click", function () {
    console.log("AddButtonButtonCLicked");
    operator = "+";
});

document.getElementById("substractButton").addEventListener("click", function () {
    console.log("SubstractButtonButtonCLicked");
    operator = "-";
});

document.getElementById("multiplyButton").addEventListener("click", function () {
    console.log("MultiplyButtonButtonCLicked");
    operator = "*";
});

document.getElementById("diviseButton").addEventListener("click", function () {
    console.log("DiviseButtonButtonCLicked");
    operator = "/";
});

document.getElementById("equalButton").addEventListener("click", function () {
    console.log("EqualButtonButtonCLicked");
    operate();
});

function operate() {
    firstElement = parseInt(firstElement);
    secondElement = parseInt(secondElement);
    switch (operator) {
        case "+":
            result = firstElement + secondElement;
            break;

        case "-":
            result = firstElement - secondElement;
            break;

        case "*":
            result = firstElement * secondElement;
            break;

        case "/":
            result = firstElement / secondElement;
            break;
    }

    console.log(result);
}

