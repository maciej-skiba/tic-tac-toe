let toMove = "X";
const squares = document.getElementsByClassName("square");

function Move() {
    if (toMove == "X") toMove = "O";
    else toMove = "X";
    alert("toMove = ", toMove);
}

Array.from(squares).forEach(square => {
    square.addEventListener('click', Move());
});
