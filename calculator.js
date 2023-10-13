var secondElement = "", firstElement = "", operator = null, result = "", firstElementToUse = "", secondElemendToUse = "";


document.getElementById("resetButton").addEventListener("click", function () {
    firstElement = "";
    secondElement = "";
    result = "";
    operator = null;
    clearScrean();
});

document.getElementById("deleteButton").addEventListener("click", function () {
    console.log("DeleteButtonCLicked");
});

document.getElementById("number9").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(9);
        show(9);
    } else {
        secondElemendToUse = secondElemendToUse.concat(9);
        show(9);
    }
});

document.getElementById("number8").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(8);
        show(8);
    } else {
        secondElemendToUse = secondElemendToUse.concat(8);
        show(8);
    }
});

document.getElementById("number7").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(7);
        show(7);

    } else {
        secondElemendToUse = secondElemendToUse.concat(7);
        show(7);
    }
});

document.getElementById("number6").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(6);
        show(6);

    } else {
        secondElemendToUse = secondElemendToUse.concat(6);
        show(6);
    }
});

document.getElementById("number5").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(5);
        show(5);

    } else {
        secondElemendToUse = secondElemendToUse.concat(5);
        show(5);
    }
});

document.getElementById("number4").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(4);
        show(4);

    } else {
        secondElemendToUse = secondElemendToUse.concat(4);
        show(4);
    }
});

document.getElementById("number3").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(3);
        show(3);

    } else {
        secondElemendToUse = secondElemendToUse.concat(3);
        show(3);
    }
});

document.getElementById("number2").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(2);
        show(2);

    } else {
        secondElemendToUse = secondElemendToUse.concat(2);
        show(2);
    }
});

document.getElementById("number1").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(1);
        show(1);

    } else {
        secondElemendToUse = secondElemendToUse.concat(1);
        show(1);
    }
});

document.getElementById("number0").addEventListener("click", function () {
    if (operator == null) {
        firstElementToUse = firstElementToUse.concat(0);
        show(0);

    } else {
        secondElemendToUse = secondElemendToUse.concat(0);
        show(0);
    }
});

document.getElementById("addButton").addEventListener("click", function () {
    console.log("AddButtonButtonCLicked");
    operator = "+";
    show(operator);
});

document.getElementById("substractButton").addEventListener("click", function () {
    console.log("SubstractButtonButtonCLicked");
    operator = "-";
    show(operator);
});

document.getElementById("multiplyButton").addEventListener("click", function () {
    console.log("MultiplyButtonButtonCLicked");
    operator = "*";
    show(operator);
});

document.getElementById("diviseButton").addEventListener("click", function () {
    console.log("DiviseButtonButtonCLicked");
    operator = "/";
    show(operator);
});

document.getElementById("equalButton").addEventListener("click", function () {
    console.log("EqualButtonButtonCLicked");
    operate();
});

function operate() {
    firstElement = parseInt(firstElementToUse);
    secondElement = parseInt(secondElemendToUse);
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
    firstElementToUse ="";
    secondElemendToUse="";
    showTotal(result);
    console.log(result);
}

function show(toShow) {
    if (document.getElementById("p3") == null) {
        const para = document.createElement("p");
        para.setAttribute("id", "p3");
        const showNumber = document.getElementById('calculatorResult');
        const numberToShow = document.createTextNode(toShow);
        para.append(numberToShow);
        showNumber.insertBefore(para,total);
        firstElement = "";
    } else {
        const toAdd = document.getElementById("p3");
        toAdd.append(toShow);
        firstElement = "";
    }

}

function clearScrean() {
    // const para = document.getElementById("p3");
    // if (document.getElementById("p3") != null) {
    //     para.remove();
    //     const para = document.createElement("p");
    //     para.setAttribute("id", "p3");
    // }
    // const toRemove = document.getElementById("total");
    // if(document.getElementById("total")!=null){
    //     toRemove.remove();
    //     const para = document.createElement("p");

    // }
    location.reload();
}

function showTotal(total){
    const resultToShow = document.getElementById("total");
    const totalToShow = document.createTextNode(total);
    resultToShow.append(totalToShow);
}