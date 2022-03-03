var randomNumber1 = Math.random() * 6 + 1; // from 1 to 6
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random() * 6 + 1; // from 1 to 6
randomNumber2 = Math.floor(randomNumber2);

//img1
var imageOne = document.querySelector(".img1");
var imageTwo = document.querySelector(".img2");

changeDice(imageOne, randomNumber1);
changeDice(imageTwo, randomNumber2);
winner();

function changeDice(image, randomNumber){
  if (randomNumber === 1){
    image.setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber === 2){
    image.setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber === 3){
    image.setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber === 4){
    image.setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber === 5){
    image.setAttribute("src", "images/dice5.png");
  }
  else{
    image.setAttribute("src", "images/dice6.png");
  }
}

function winner(){
  var title = document.querySelector("h1");
  if (randomNumber1 > randomNumber2){
    title.innerHTML = "Player 1 Wins!";
    //title.setAttribute("name", "Player 1 Wins!");
  }
  else if (randomNumber1 < randomNumber2) {
    //title.setAttribute("name", "Player 2 Wins!");
    title.innerHTML = "Player 2 Wins!";
  }
  else{
    //title.setAttribute("name", "Draw!");
    title.innerHTML = "Draw!";
  }
}
