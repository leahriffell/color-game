var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColorDisplay = document.querySelector("#colorDisplay");
var rightOrWrongDisplay = document.querySelector("#rightOrWrong");
var body = document.querySelector("body");
var pickedColor = pickColor();

function changeColors(color) {
  for(var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

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


pickedColorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  //grab color of picked square
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      rightOrWrongDisplay.textContent = "Good job!";
      changeColors(clickedColor);
    } else {
      rightOrWrongDisplay.textContent = "Try again, loser";
      this.style.backgroundColor = "white";
    }
  });
}
