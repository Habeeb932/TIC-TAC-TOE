let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winner = document.querySelector("h2");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const newGame = () =>{
    turn0 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winner.innerText = "";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clikced")
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const showWinner = (win) =>{
    winner.innerText = `Congratulations Winner is ${win}`;
    noButtons();
};

const noButtons = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const checkWinner = () => {
    for(let x of winPatterns) {
        let pos1 = boxes[x[0]].innerText;
        let pos2 = boxes[x[1]].innerText;
        let pos3 = boxes[x[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
        
    }
};

resetBtn.addEventListener("click",newGame);
