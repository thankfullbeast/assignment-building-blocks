function countdownTimer() {
    var timer = 50;

    //start at 50 sec
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 1000);

    //45 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 6000);

    //40 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 11000);

    //35 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 16000);

    //30 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 21000);

    //25 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 26000);

    //20 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 31000);

    //15 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 36000);

    //10 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 41000);

    //5 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 46000);

    //0 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = timer;
        timer = timer - 5;
    }, 51000);

    //0 sec 
    setTimeout(function () {
        document.getElementById("ctdntimer").innerHTML = "BlastOff";
    }, 56000);

}

function ranNumGen()  {
    var numb = Math.ceil(Math.random()*7);
    document.getElementById("RndNum").innerHTML = numb;

}

//play craps fuction from https://synchronic.uat.edu/courses/3843/assignments/137165#submit
function play() {
    //create a die1 variable and assign 1-6
    var die1 = Math.ceil(Math.random() * 6);
    //create a die2 variable and assign 1-6
    var die2 = Math.ceil(Math.random() * 6);
    //create a sum variable and adds die1 and die2 together
    var sum = die1 + die2;
    //printing out die 1 results
    document.getElementById("die1Res").innerHTML = "die 1 is: " + die1 ;
    //printing out die 2 results
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    //printing out sum results
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    //sum of dice not equal to 7 or 11
    if (sum == 7 || sum == 11) {

        document.getElementById("finalRes").innerHTML = "Craps you lose!";
    }
    //dice 1 is equal to dice and are even 
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "Doubles - you win";
    }
    //their niether even or equal to 7 or 11
    else {
        document.getElementById("finalRes").innerHTML = "push, please try again";
    }

}