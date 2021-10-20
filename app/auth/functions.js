// $("video").on("ended", function () {
//   this.load();
//   this.play();
// });
// if (window.chrome)
//   $("[type=video\\/mp4]").each(function () {
//     $(this).attr("src", $(this).attr("src").replace(".mp4", "_c.mp4"));
//   });

const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game");
const displayResult = document.getElementById("display-result");
resetButton.addEventListener("click", resetBoard);
let boxes = document.querySelectorAll(".col-4");
// let vid = document.getElementById("bgvid");
// vid.play();
// let aud = document.getElementById('')
// boxaures
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

// boxes = Array.from(boxes)
let complete = false;
// made emoji a global variabl so when i return '' it returns the emoji on its respective turn
let emoji = "";
// counter when ever this function is Invoked turn increases by 1
let turn = 0;
console.log(turn);
function counting() {
  turn++;
  return turn;
}

//returns X or O depending on the turn if turn is even or odd
const playerTurn = (turn) => {
  // $('col-4').css('font-size', 'xx-large');
  if (turn % 2 === 0) {
    return (emoji = "🔪");
  } else {
    return (emoji = "🥔");
  }
};

//passes in a boxuare param and adds the X or O in to the text content of the html
function switchXtoO(box) {
  if (box.innerText === "" && complete === false) {
    box.textContent = playerTurn(turn);
    winningCondition();
    return counting();
  }
}
// make a post request each time the event is clicked

startButton.addEventListener("click", () => {
  //adds event listener to each box and bind the function
  //to the element so we can pass it in
  // binding each square to a new function
  // bidning box to switchXtoO function
  // using the object with 'this' 
  box1.addEventListener("click", switchXtoO.bind(this, box1));
  box2.addEventListener("click", switchXtoO.bind(this, box2));
  box3.addEventListener("click", switchXtoO.bind(this, box3));
  box4.addEventListener("click", switchXtoO.bind(this, box4));
  box5.addEventListener("click", switchXtoO.bind(this, box5));
  box6.addEventListener("click", switchXtoO.bind(this, box6));
  box7.addEventListener("click", switchXtoO.bind(this, box7));
  box8.addEventListener("click", switchXtoO.bind(this, box8));
  box9.addEventListener("click", switchXtoO.bind(this, box9));
});

function winningCondition() {
  if (
    (box1.innerText === "🔪" &&
      box2.innerText === "🔪" &&
      box3.innerText === "🔪") ||
    (box4.innerText === "🔪" &&
      box5.innerText === "🔪" &&
      box6.innerText === "🔪") ||
    (box7.innerText === "🔪" &&
      box8.innerText === "🔪" &&
      box9.innerText === "🔪") ||
    (box1.innerText === "🔪" &&
      box5.innerText === "🔪" &&
      box9.innerText === "🔪") ||
    (box7.innerText === "🔪" &&
      box5.innerText === "🔪" &&
      box3.innerText === "🔪") ||
    (box1.innerText === "🔪" &&
      box4.innerText === "🔪" &&
      box7.innerText === "🔪") ||
    (box2.innerText === "🔪" &&
      box5.innerText === "🔪" &&
      box8.innerText === "🔪") ||
    (box3.innerText === "🔪" &&
      box6.innerText === "🔪" &&
      box9.innerText === "🔪")
  ) {
    console.log(`${emoji} is the champion`);
    displayResult.innerText = `${emoji} is the champion`;
    // logs player won with how many turns
    console.log(`Player: ${emoji} won in ${turn + 1} turns`);
    complete = true;
  } else if (
    (box1.innerText === "🥔" &&
      box2.innerText === "🥔" &&
      box3.innerText === "🥔") ||
    (box4.innerText === "🥔" &&
      box5.innerText === "🥔" &&
      box6.innerText === "🥔") ||
    (box7.innerText === "🥔" &&
      box8.innerText === "🥔" &&
      box9.innerText === "🥔") ||
    (box1.innerText === "🥔" &&
      box5.innerText === "🥔" &&
      box9.innerText === "🥔") ||
    (box7.innerText === "🥔" &&
      box5.innerText === "🥔" &&
      box3.innerText === "🥔") ||
    (box1.innerText === "🥔" &&
      box4.innerText === "🥔" &&
      box7.innerText === "🥔") ||
    (box2.innerText === "🥔" &&
      box5.innerText === "🥔" &&
      box8.innerText === "🥔") ||
    (box3.innerText === "🥔" &&
      box6.innerText === "🥔" &&
      box9.innerText === "🥔")
  ) {
    console.log(`${emoji} is the champion`);
    displayResult.innerText = `${emoji} is the champion`;

    console.log(turn);
    complete = true;
  
  } else if (turn === 8) {
    displayResult.innerText = "Tie Game, Play Again";
    console.log("Tie Game!");
    //console.log(emoji);
    complete = true;
  } else {
    console.log(`It's was ${emoji}  turn`);
    //	console.log(turn);
  }
}
// post for after winning
function resetBoard() {
  boxes.forEach((box) => {
    box.innerText = "";
    console.log("removed");
    turn = 0;
    displayResult.innerText = "";
    complete = false;
  });
  return turn;
}
