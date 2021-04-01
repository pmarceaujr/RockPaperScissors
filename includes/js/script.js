//Array of name to play aginst so it isn't the Generic Computer

let compNames = ["James","Kathy","Grammy","Peppere","Uncle Paul","Madeline","Isabelle"];
let rockPaperScissors = ["rock","paper","scissors"]
let userPick = "";
let computerPick = "";
let player1Name = '';
let player2Name = '';
let winnerMessage = '';
let player1Score = '';
let player2Score = '';

function initializeVars(){
    let noticesUpdate = document.querySelector("#notices h2")
    noticesUpdate.textContent = "";
    let winnerUpdate = document.querySelector("#winners h2")
    winnerUpdate.textContent = "";
    let p1ScoreUpdate = document.querySelector("#p1Score h2")
    p1ScoreUpdate.textContent = 0;
    let p2ScoreUpdate = document.querySelector("#p2Score h2")
    p2ScoreUpdate.textContent = 0;
     userPick = "";
     computerPick = "";
     player1Name = '';
     player2Name = '';
     winnerMessage = '';
     player1Score = '';
     player2Score = ''; 
}

// Assignment Code
let playButton = document.querySelector("#playBtn");

// Add event listener to generate button
playButton.addEventListener("click", startGame);

function startGame(){
    initializeVars()
    //Prompt player 1 for name, quesySelect the element, and assign user Input to Player 1 label
    player1Name = prompt("Player 1, what is your name?")
    let player1Label = document.querySelector("#p1Label h2");
    player1Label.textContent = player1Name;
    //Computer will select player 2 name from compaNames Array, quesySelect the element, and assign random name to Player 2 label
    player2Name = compNames[Math.floor(Math.random()* compNames.length)]
    let player2Label = document.querySelector("#p2Label h2");
    player2Label.textContent = player2Name;
    //Cycle through each img and make them clickable by adding an eventlistener
    let gameImgs = document.querySelectorAll("img");
    for (let i = 0; i <gameImgs.length; i++){
        gameImgs[i].addEventListener("click", getPlayerPicks);
    }
}

function getPlayerPicks(event){
    //User clcked an image... what one?  Let'sfind out...
    userPick = event.target;
    computerPick = rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)]
    // add code to dispaly messsage "You picked... waiting for computer to pick./the computer picked"
    //alert(`${player1Name} picked: ${userPick.alt}.  ${player2Name} picked: ${computerPick}`)
    // alert(computerPick)
    processPicks()
}

function processPicks(){
    let noticesUpdate = document.querySelector("#notices h2")
    noticesUpdate.textContent = `${player1Name} picked: ${userPick.alt}  -  ${player2Name} picked: ${computerPick}`
    if (userPick.alt === computerPick ){
        winnerMessage = `It's a tie, nobody wins!`;
    }
    else if ((userPick.alt === 'rock' && computerPick === 'scissors') || (userPick.alt === 'scissors' && computerPick === 'paper') || (userPick.alt === 'paper' && computerPick === 'rock')){
        winnerMessage = `${player1Name} wins!`;
        player1Score++
    }
    else{
        winnerMessage = `${player2Name} wins!`;
        player2Score++
    }
    let winnerUpdate = document.querySelector("#winners h2")
    winnerUpdate.textContent = `${winnerMessage}`
    let p1ScoreUpdate = document.querySelector("#p1Score h2")
    if (player1Score ===""){
        p1ScoreUpdate.textContent = 0;
    }
    else{
        p1ScoreUpdate.textContent = player1Score;
    }
    let p2ScoreUpdate = document.querySelector("#p2Score h2")
    if (player2Score ===""){
        p2ScoreUpdate.textContent = 0;
    }
    else{
        p2ScoreUpdate.textContent = player2Score;
    }
}