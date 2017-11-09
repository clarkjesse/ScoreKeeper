// JavaScript source code
console.log("Logging Initialized");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",
    function() {
        if (!gameOver) {
            p1Score++;
            if (p1Score === winningScore) {
                p1Display.classList.add("winner");
                p2Display.classList.add("loser")
                gameOver = true;
 
            }
            p1Display.textContent = p1Score;
        }; 
});

p2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            p1Display.classList.add("loser")
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    };
});

resetButton.addEventListener("click",
    function() {
        p1Score = 0;
        p1Display.textContent = p1Score;
        p2Score = 0;
        p2Display.textContent = p2Score;
        gameOver = false;
        p1Display.classList.remove("winner");
        p1Display.classList.remove("loser");
        p2Display.classList.remove("winner");
        p2Display.classList.remove("loser");

    });