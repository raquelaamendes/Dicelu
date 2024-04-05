const rows = 10;
const cols = 10;
const grid = [];
const dice = 0;

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

    buttonDiceRoll.setAttribute('type', 'button');
    buttonReset.setAttribute('type', 'button');
    buttonDiceRoll.setAttribute('onclick', 'rolldice()');
    
    buttonDiceRoll.classList.add("btn", "btn-primary", "rounded-0", "btn-margin-right");
    buttonReset.classList.add("btn", "btn-primary", "rounded-0", "btn-margin-left");

    buttonDiceRoll.textContent = 'Roll the dice';
    buttonReset.textContent = 'Reset';

    const divButtons = document.getElementById('div-buttons');
    divButtons.appendChild(buttonDiceRoll);
    divButtons.appendChild(buttonReset);


}

function rolldice(){
    const dice = Math.trunc((Math.random() * (13 - 1) + 1));
    console.log("Dice " + dice);
}