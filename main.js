var number1 = Math.floor((Math.random() * 10) + 1);
var number2 = Math.floor((Math.random() * 10) + 1);

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

var answer = number1 + number2;

var check = document.getElementById("input");
var value = check.value;

var btn = document.getElementById("btn");


btn.onclick = function () {
    value = check.value;

    if (answer != value) {
        alert("You are wrong, answer is : " + answer);
        
    } 


    document.getElementById("input").value = "";

    document.getElementById('number1').innerHTML = " ";
    document.getElementById('number2').innerHTML = " ";

    number1 = Math.floor((Math.random() * 10) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);

    document.getElementById('number1').innerHTML = number1;
    document.getElementById('number2').innerHTML = number2;

    answer = number1 + number2;
}