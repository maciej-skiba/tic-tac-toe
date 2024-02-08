let toMove = "X";

const toMoveImg = document.getElementById("to-move-img");
const squares = document.getElementsByClassName("square");

document.addEventListener('DOMContentLoaded', Prepare);

function Prepare() {
    
    console.log("Window loaded.");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', Move, true);
    }
}

function Move() {
    console.log(toMove + " Moved");
    if (toMove == "X") toMove = "O";
    else toMove = "X";
    toMoveImg.src = "js/" + toMove + ".png";
}

Array.from(squares).forEach(square => {
});
