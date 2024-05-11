const rows = 10;
const cols = 10;
const grid = [];
const dice = 0;
let totalCellsPlayed = 0;
let timesDice = 0;
let currentRow = 9;
let currentCol = 0;
let blockedRow = 9;
let numBlockedRows=0;

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < rows; i++) {
    
    grid[i] = [];
    
    for (let j = 0; j < cols; j++) {
        
        const cell = document.createElement('div');
        cell.classList.add('position');
        
       
        const cellId = `cell-${i}-${j}`;
        cell.setAttribute('id', cellId);
        
        
        gridContainer.appendChild(cell);
        grid[i][j] = cell;
    }
}

// Game Functionality

function Startgame(){
    //Remove Start the game button to show other buttons
    const buttonstart = document.getElementById('btn-startgame');
    buttonstart.remove();

    //Create buttons Dice Roll and Reset
    const buttonDiceRoll = document.createElement('button');
    const buttonReset = document.createElement('button');

    buttonDiceRoll.id = "btn_diceRoll";
    buttonReset.id = "btn_Reset";

    buttonDiceRoll.setAttribute('type', 'button');
    buttonReset.setAttribute('type', 'button');
    buttonDiceRoll.setAttribute('onclick', 'rolldice()');
    buttonReset.setAttribute('onclick', 'reset()');
    
    buttonDiceRoll.classList.add("btn", "btn-primary", "rounded-0", "btn-margin-right");
    buttonReset.classList.add("btn", "btn-primary", "rounded-0", "btn-margin-left");

    buttonDiceRoll.innerHTML = 'Roll the dice';
    buttonReset.innerHTML = 'Reset';

    const divButtons = document.getElementById('div-buttons');
    divButtons.appendChild(buttonDiceRoll);
    divButtons.appendChild(buttonReset);


}

function FillCell(dice, grid){

    for(let i = 0; i < dice; i++){
        
        const currentCellId = document.getElementById(`cell-${currentRow}-${currentCol}`);

        if(currentCellId == null){
            break;
        }

        currentCellId.classList.replace("position" , "currentPosition");
        
        if(currentCol+1 > 9){
            currentRow--;
            currentCol = 0;
        }else{
            currentCol++;
        }

        
    }
}

function jail(grid){
    console.log("Line blocked!");
    
    for(let i = 0; i < 10; i++){
        const currentCellId = document.getElementById(`cell-${blockedRow}-${i}`);
        currentCellId.classList.add("blockedPosition");
    }

    numBlockedRows++;
    blockedRow--;
}

function gameOver(){
    
    let lost = 0;

    if(totalCellsPlayed <= numBlockedRows*cols){
        document.getElementById("btn_diceRoll").disabled = true;
        document.getElementById("btn_Reset").disabled = true;
        console.log("O jogador perdeu o jogo!"); 
        
        var myModal = new bootstrap.Modal(document.getElementById("gameOverModal"));
        myModal.show();
    }

    
}

function wonGame(){
    
    console.log("totalCasasjogadas = " + totalCellsPlayed + "\nTotalCells = " + rows*cols);
    console.log("Entrou no ganhou o jogo para verificar.");
    if(totalCellsPlayed >= rows*cols){
        console.log("O jogador ganhou o jogo! PARABENS");
        document.getElementById("btn_diceRoll").disabled = true;
        document.getElementById("btn_Reset").disabled = true;

        document.getElementById("modalTitle").innerHTML = "Congratulations! &#127882";
        document.getElementById("modalText").innerHTML = "You just won this silly game.";

        var myModal = new bootstrap.Modal(document.getElementById("gameOverModal"));
        myModal.show();


    }

}

var continueModal = new bootstrap.Modal(document.getElementById("continueGame"));

function Continue(){
    continueModal.show();
}

function blockline(){
    continueModal.hide();
    document.getElementById("btn_diceRoll").disabled = false;
    document.getElementById("btn_Reset").disabled = false;
    jail(grid);
    timesDice = 0;
    gameOver();
}

function rolldice(){
    const dice = Math.trunc((Math.random() * (7 - 1) + 1));
    console.log("Dice " + dice);
    FillCell(dice, grid);
    timesDice++;
    totalCellsPlayed += dice;

    wonGame();

    if(timesDice == 3){
        Continue();
        
    }

}


function restartGame(){
    var modal = document.getElementById('gameOverModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    location.reload();
}

function reset(){
    location.reload();
}

