var input = document.getElementById("guessNumber")
var paragraph = document.getElementById("para")
var scoreElement = document.getElementById("score")

var randomNumber = Math.floor(Math.random()*3)+1

var totalScore = 10

function check() {
  var Guess = input.value

if( Guess == randomNumber) {
paragraph.textContent="You Are Right"
alert("YOU WINNN......🔥")

}
  else {
    paragraph.textContent="You Are Wrong"

    alert("YOU FAIL......🔥")

    totalScore = totalScore - 1
scoreElement.textContent = "Score:"+totalScore
}


}
