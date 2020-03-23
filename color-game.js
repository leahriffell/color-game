var numOfSquares = 6;
var colors = [];
var pickedColor;
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(numOfSquares);
var pickedColorDisplay = document.querySelector("#colorDisplay");
var rightOrWrongDisplay = document.querySelector("#rightOrWrong");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector("#header");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //figure out how many squares to show
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {
        rightOrWrongDisplay.textContent = "Good job!";
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
        header.style.color = "white";
        resetButton.textContent = "Play again?";
      } else {
        rightOrWrongDisplay.textContent = "Try again, loser";
        this.style.backgroundColor = "white";
      }
    });
  }
}

function reset() {
  //generate all new random colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array as the winning color (aka picked color)
  pickedColor = pickColor();
  //change color display in header to match the picked color
  pickedColorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "Switch up colors";
  header.style.backgroundColor = "white";
  header.style.color = "black";
  rightOrWrongDisplay.textContent = "";
}

function changeColors(color) {
  for(var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//but I need to make sure all colors numbers are unique
function generateRandomColors(num) {
  // make an array
  var arr = []
  // repeat num times
  for(var i = 0; i < num; i++) {
    // add num random colors to array
    arr.push(randomColor());
  }
  // return that array
  return arr;
  }

function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function() {
  reset();
})





// easyButton.addEventListener("click", function() {
//   header.style.backgroundColor = "white";
//   header.style.color = "black";
//   rightOrWrongDisplay.textContent = "";
//   //change button style to show which is selected
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   //change color array to 3 values
//   numOfSquares = 3;
//   colors = generateRandomColors(numOfSquares);
//   //generate new picked color
//   pickedColor = pickColor();
//   //change color display in header to match the picked color
//   pickedColorDisplay.textContent = pickedColor;
//   //hide last 3 squares divs as well as assign new background colors for first 3
//   for(var i = 0; i < squares.length; i++) {
//     if(colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardButton.addEventListener("click", function () {
//   header.style.backgroundColor = "white";
//   header.style.color = "black";
//   rightOrWrongDisplay.textContent = "";
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numOfSquares = 6;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   pickedColorDisplay.textContent = pickedColor;
//   for(var i = 0; i < colors.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });
