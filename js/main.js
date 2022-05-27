// Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const gridContainer = document.querySelector(".gridContainer");

// Creo una funzione per generare la griglia 6*6

function createGrid(Hcells, VCells) {
    const totalCells = Hcells * VCells;
    console.log(totalCells);



    //Uso un ciclo per creare le celle

    for (let i = 0; i < totalCells; i++) {
        // Creo un div con create element per rappresentare uan singola cella
        const cell = document.createElement('div');
        cell.classList.add("cell");
        gridContainer.style.width= `width : calc(var(--cell-size))`;
        gridContainer.append(cell);

    }

}
createGrid(6, 6); 