let level = 0;

let gamePatern = [];

let userClickedPattern = [];

let started = false;

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


function handler(cond) {
    if (cond) {
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
    if (currentLevel == gamePatern[userClickedPattern.length - 1]) {
        // console.log(gamePatern);
        // console.log(userClickedPattern);
        // for (let i = 0; i < userClickedPattern.length; i++) {
        //     if (userClickedPattern[i] == gamePatern[i]) {
        //         continue;
        //     } else {
        //         console.log("wrong");
        //         break;
        //     }

        
        // }
        console.log("good");
    } else {
        $(".btn").off("click");
        console.log("wrong");   
        let wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();
        $("body").toggleClass("game-over");
        setTimeout(function () {
            $("body").toggleClass("game-over");
        }, 200)
        $("h1").html("Game over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePatern = [];
    started = [];
    started = false;
    document.addEventListener("keydown", function () {
        nextSequence();
        started = true;
        $(".btn").on("click");
        handler(started);
    }, {once:true});
}

document.addEventListener("keydown", function () {
    nextSequence();
started = true;
handler(started);
}, {once:true});



// handler();




