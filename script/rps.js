 
const start = document.querySelector(".start");
const rock = document.getElementById("rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computer = document.getElementById("computerImage");
const player = document.getElementById("playerImage");
const test = document.querySelector("p");
const bDrop = document.getElementById("bDrop");
var computerRoll = 0;
var computerPick;
var winCount = 0;
var tieCount = 0;
var loseCount = 0;


// newGame sets computer pick for rock paper scrissors





function playerPick(choice) {

    

    //clear images 
    computer.src = "./images/Empty.png";
    player.src = "./images/Empty.png";
    
    //reset background image to table.png
    bDrop.style.backgroundImage = "url('./images/table.png')";

    //roll for computer to decide rock, paper, or scissor
    computerRoll = Math.floor(Math.random() * 3) + 1;

    if (computerRoll == "1") {
        computerPick = "./images/rock.png";
    } else if ( computerRoll == "2") {
        computerPick = "./images/paper.png";
    } else {
        computerPick = "./images/scissors.png";
    }


    // check for player win

    if (choice == "rock") {
    computer.src = computerPick;
    player.src = "./images/rock.png";
    
    if (computerPick == "./images/rock.png") {
        //code if a tie
        alert("Please play again.");
        tieCount++;
        
    } else if ( computerPick == "./images/paper.png") {
        alert("Please play again.");
        loseCount++;
    } else {
        youwin();
        winCount++;
    }

} else if (choice == "paper") {
    computer.src = computerPick;
    player.src = "./images/paper.png";
    if (computerPick == "./images/rock.png") {
        
        youwin();
        winCount++;
        
    } else if ( computerPick == "./images/paper.png") {
        alert("Please play again.");
        tieCount++;
    } else {
        alert("Please play again.");
        loseCount++;
    }

} else {
    computer.src = computerPick;
    player.src = "./images/scissors.png";
    if (computerPick == "./images/rock.png") {
        //code if a tie
        alert("Please play again.");
        loseCount++;
        
    } else if ( computerPick == "./images/paper.png") {
        youwin();
        winCount++;
    } else {
        alert("Please play again.");
        tieCount++;
    }

}

    }





function youwin() {
    bDrop.style.backgroundImage = "url('./images/youwin.png')";
}

function score() {
    alert(`WINS = ${winCount}, TIES = ${tieCount}, LOSSES = ${loseCount}`);
}