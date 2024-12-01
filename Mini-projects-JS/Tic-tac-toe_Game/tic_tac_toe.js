let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;
let count = 0;
const winners =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

const resetgame = () => {
    turno = true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            //playerO
            box.innerText = "O";
            turno = false;
        } else {
            //playerX
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        count++;
        
        let iswinner=checkwinner();

        if(count==9 && !iswinner){
            gamedrawn();
        }
    });
});

const gamedrawn=()=>{
msg.innerText=`game was drawn`;
msgcontainer.classList.remove('hide');
disableboxes();
};


const showwinner = (winner) => {
    msg.innerText = `congraluation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkwinner = () => {
    for (let pattern of winners) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" &&  pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                return true;
            }
        }
    }

};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);