const target= document.getElementById("target");
const startButton= document.getElementById("startButton");
const scoreDisplay= document.getElementById("score");
const timeDisplay= document.getElementById("time");
const messageDisplay= document.getElementById("message");

let score = 0;
let time = 30;
let gamerunning = false;

function moveTarget(X, y) {

    const maxX =540;
    const maxY= 340;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX+ "px";
    target.style.top = randomY + "px";

}

target.addEventListener("click", function () {
    
   if(gamerunning === true) { 
    score = score + 1;

 scoreDisplay.textContent = score;

   moveTarget();
   
}

})


startButton.addEventListener("click", function () {
   score = 0;
   timeLeft = 30;
   gamerunning = true;
   scoreDisplay.textContent = score;
   timeDisplay.textContent = timeLeft;

   messageDisplay.textContent = "";
   target.style.display = "block";
    
    moveTarget();
});
