var a =0;
var score = -1;
function playGame(){
    window.location.href="game.html";
}

function showInstructions(){
    ++score;
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("Instructions").innerHTML = "Welcome to the game!<br> You will be given a series of questions.<br> Answer them correctly to earn points.<br> Good luck!";
}