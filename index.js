var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png

var randomImageSource = "Images/" + randomDiceImage ;   // Images/dice1.png - Images/dice2.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// for second image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "Images/" + randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// for heading

if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").innerHTML = "🚩 Player1 wins!"

} else if(randomNumber1 < randomNumber2){
    
    document.querySelector("h1").innerHTML = "Player2 wins! 🚩 "

} else{
    document.querySelector("h1").innerHTML = "Draw!"
}




