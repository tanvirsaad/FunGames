var buttonColors = ["red","blue","green","yellow"];
var gamePattern = []
var userChosenPattern = []
var level = 0;

$("."+"btn").click(function(){
    if(level!=0){
        animatePress(this.id);
        playAudio(this.id);
        handleInput(this.id);
    }
});

$(document).keypress(function(){
    if(level == 0){
        nextSequence();
    }
});

function nextSequence(){
    level++;
    userChosenPattern.length = 0;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    showPattern(randomChosenColor);
}

function playAudio(color){
    var path = "sounds/"+color+".mp3";
    var audio = new Audio(path);
    audio.play();
}

function showPattern(color){
    $("#"+color).fadeOut(100).fadeIn(100);
    playAudio(color);
}

function handleInput(color){
    var userChosenColor = color;
    userChosenPattern.push(userChosenColor);
    checkAns(color);

}

function checkAns(color){
    if(gamePattern[userChosenPattern.length-1]== color){
        if(userChosenPattern.length == gamePattern.length){
            setTimeout(nextSequence,1200);
        }
    }else{
        playAudio("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        level = 0;
        $("h1").text("Game over! press any key to continue...");
    }
}

function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}