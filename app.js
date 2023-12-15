let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset")
let newGame = document.querySelector("#new");
let msg = document.querySelector("#msg");


let turn0 = true//player x,player o

const winnPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

 const resetGame= () => {
    turn0 = true;
    enableBoxes();
    msg.classList.add("hide");
 }

boxes.forEach((box) => {

        box.addEventListener("click", () => {
            // console.log("Box is clicked");
            if(turn0) {//player o
                box.innerText = "o";
                turn0 = false;
            } else {//player x
                box.innerText = "x";
                turn0 = true;
            }

            box.disabled = true;

            checkWinner();
        });

});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations,Winner is ${Winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};



const checkWinner = () => {
    for(let pattern of winnPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2],
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        //     );

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText; 
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log("Winner", pos1Val)

                    showWinner(pos1Val);
                }
            }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);