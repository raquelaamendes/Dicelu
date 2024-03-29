const rows = 10;
const cols = 10;
const grid = [];

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < rows; i++) {
    
    grid[i] = [];
    
    for (let j = 0; j < cols; j++) {
        
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
       
        const cellId = `cell-${i}-${j}`;
        cell.setAttribute('id', cellId);

        const cellClass = `position`;
        cell.setAttribute('class', cellClass);
        
        
        gridContainer.appendChild(cell);
        grid[i][j] = cell;
    }
}

// Game Functionality