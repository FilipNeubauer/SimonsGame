let level = 0;

let gamePatern = [];

let userClickedPattern = [];

const colors = ["red", "blue", "green", "yellow"];


function buttonSopund(color) {
    switch(color) {
        case "green":
            let greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;
        case "red":
            let redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;
        case "blue":
                let blueSound = new Audio("sounds/blue.mp3");
                blueSound.play();
                break;
        case "yellow":
                let yellowSound = new Audio("sounds/yellow.mp3");
                yellowSound.play();
                break;
    }
}


function handler() {
    $(".btn").click(function () {
        let userChosenColour = this.id;
        buttonSopund(userChosenColour);
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern[userClickedPattern.length -1]);
        console.log(gamePatern.length);
        console.log(userClickedPattern.length);
        if (gamePatern.length == userClickedPattern.length) {
            setTimeout(nextSequence, 1000);

        }
    })
}


function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.round(Math.random()*3);
    let randomChosenColor = colors[randomNumber];
    gamePatern.push(randomChosenColor);
    buttonSopund(randomChosenColor);
    animatePress(randomChosenColor);
    $("h1").html("Level " + level);
    level += 1
}

function animatePress(currentColor) {
    $("#" + currentColor).toggleClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).toggleClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (currentLevel == gamePatern[gamePatern.length - 1]) {
        for (let i = 0; i < userClickedPattern.length; i++) {
            if (userClickedPattern[i] == gamePatern[i]) {
                continue;
            } else {
                console.log("wrong");
                break;
            }
        
        }
    } else {
        console.log("wrong");   
    }
}


document.addEventListener("keydown", function () {
    nextSequence();}, {once:true});



handler();




