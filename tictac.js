let boxes = document.querySelectorAll( ".box");
let resetbtn = document.querySelector('#reset');
let gamebtn = document.querySelector('#new-btn');
let msgcont = document.querySelector( ".msg-container") ;
let msg = document.querySelector( "#msg");
 
let turnO = true;

const winnerpattern = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7]
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    ];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box is clicked")
        // box.innerHTML = "X";
        if(turnO){
            box.innerHTML = "0";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = "true";
        
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerHTML = "";
    }
  };

  const resetgame = () => {
    turnO = true;
    msgcont.classList.add("hide");
    enableBoxes();
   };
   
gamebtn.addEventListener("click",resetgame);

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
  };


const checkWinner = () => {
    for (let pattern of winnerpattern) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
  
        if(pos1 != "" && pos2 != "" && pos3 != ""){ 
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner");
                showWinner(pos1); 
                return true;
            }
        }
}

};

