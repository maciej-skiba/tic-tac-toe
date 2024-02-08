let toMove = "X";
let squares;
let helpboardDiv;
let playboardDiv;
let matchResultDiv;
let moveCounter;

const winIndices =
[
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

// Start the flow
document.addEventListener('DOMContentLoaded', Prepare);

// #region Functions
function Prepare() {
    console.log("Window loaded.");
    toMoveImg = document.getElementById("to-move-img");
    squares = document.getElementsByClassName("square");
    helpboardDiv = document.getElementById("helpboard");
    playboardDiv = document.getElementById("playboard");
    matchResultDiv = document.getElementById("match-result");
    moveCounter = 0;
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', Move);
    }
}

function Reset() {
    Array.from(squares).forEach(square => square.innerHTML = "");
    toMove = "X";
    helpboardDiv.innerHTML = `Move:&nbsp;<strong>${toMove}</strong>`;
    matchResultDiv.style.display = "none";
    helpboardDiv.style.display = "flex";
    moveCounter = 0;
}

function Move() {
    moveCounter++;
    if (this.textContent == "")
    {
        console.log(toMove + " Moved");
        PlaceTextInDiv(toMove, this);
        CheckTheWin(toMove)
        NextPlayer();
    }
}

function PlaceTextInDiv(text, div) { 
    div.innerHTML += text; 
}; 

function NextPlayer() {
    if (toMove == "X") toMove = "O";
    else toMove = "X";
    helpboardDiv.innerHTML = `Move:&nbsp;<strong>${toMove}</strong>`;
}

function CheckTheWin(whoMoved) {
    let indicesToCheck = Array.from(squares).map((square, index) => {
        if (square.textContent == whoMoved) {
            return index;
        }
    }).filter(index => index !== undefined);

    if (winIndices.some(arr => hasSubArray(indicesToCheck, arr))) {
        Win(whoMoved);
    }

    if (moveCounter >= 9) {
        Draw();
    }
}

function Win(winner) {
    helpboardDiv.style.display = "none";
    matchResultDiv.innerHTML = winner + " won!";
    matchResultDiv.style.display = "block";
    playboardDiv.style.pointerEvents = "none";
}

function Draw() {
    helpboardDiv.style.display = "none";
    matchResultDiv.innerHTML = "Draw";
    matchResultDiv.style.display = "block";
}

function hasSubArray(master, sub) {
    return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}

// #endregion